#!/bin/bash

#test  /api/job/{id}/run

DIR=$(cd `dirname $0` && pwd)
source $DIR/include.sh

###
# setup: create a new job and acquire the ID
###

# job exec
args="echo hello there ; sleep 30"

project=$2
if [ "" == "$2" ] ; then
    project="test"
fi

#escape the string for xml
xmlargs=$($XMLSTARLET esc "$args")
xmlproj=$($XMLSTARLET esc "$project")

#produce job.xml content corresponding to the dispatch request
cat > $DIR/temp.out <<END
<joblist>
   <job>
      <name>cli job</name>
      <group>api-test/job-run-timeout-retry</group>
      <description></description>
      <loglevel>INFO</loglevel>
      <timeout>3s</timeout>
      <retry>1</retry>
      <dispatch>
        <threadcount>1</threadcount>
        <keepgoing>true</keepgoing>
      </dispatch>
      <sequence>
        <command>
        <exec>$xmlargs</exec>
        </command>
      </sequence>
   </job>
</joblist>

END

jobid=$(uploadJob "$DIR/temp.out" "$project"  1 "")
if [ 0 != $? ] ; then
  errorMsg "failed job upload"
  exit 2
fi


###
# Run the chosen id, expect success message
###

echo "TEST: job/id/run should succeed"

execid=$(runjob "$jobid" '-opt2 a' )

#wait for execution to complete

api_waitfor_execution $execid false || fail "Failed waiting for execution $execid to complete"

# test execution status
#
runurl="${APIURL}/execution/${execid}"

params=""

# get listing
docurl ${runurl}?${params} > $DIR/curl.out
if [ 0 != $? ] ; then
    errorMsg "ERROR: failed query request"
    exit 2
fi

$SHELL $SRC_DIR/api-test-success.sh $DIR/curl.out || exit 2

#Check projects list
assert_json_value "failed-with-retry" ".status" $DIR/curl.out
assert_json_not_null ".retriedExecution.id" $DIR/curl.out
retryId=$(jq -r ".retriedExecution.id" $DIR/curl.out)


#wait for retry 1 execution to complete

api_waitfor_execution $retryId false || fail "Failed waiting for execution $retryId to complete"


# test execution status
#
runurl="${APIURL}/execution/${retryId}"

params=""

# get listing
docurl ${runurl}?${params} > $DIR/curl.out
if [ 0 != $? ] ; then
    errorMsg "ERROR: failed query request"
    exit 2
fi

$SHELL $SRC_DIR/api-test-success.sh $DIR/curl.out || exit 2

#Check projects list
assert_json_value "timedout" ".status" $DIR/curl.out
assert_json_null ".retriedExecution" $DIR/curl.out

echo "OK"


rm $DIR/curl.out

