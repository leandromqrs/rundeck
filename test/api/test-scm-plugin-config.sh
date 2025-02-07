#!/bin/bash

#/ Purpose:
#/   Test the scm plugins api config
#/ 

DIR=$(cd `dirname $0` && pwd)

source $DIR/include_scm_test.sh



test_plugin_config_json(){
local integration=$1
	local plugin=$2
	local project=$3

	ENDPOINT="${APIURL}/project/$project/scm/$integration/config"
	
	test_begin "Setup SCM Config: JSON"

	create_project $project
	
	do_setup_export_json_valid $integration $plugin $project
	
	METHOD=GET
	ACCEPT=application/json
	EXPECT_STATUS=200
	ENDPOINT="${APIURL}/project/$project/scm/$integration/config"
	api_request $ENDPOINT $DIR/curl.out

	assert_json_value "$integration" '.integration' $DIR/curl.out
	assert_json_value "$project" '.project' $DIR/curl.out
	assert_json_value "$plugin" '.type' $DIR/curl.out
	assert_json_value "true" '.enabled' $DIR/curl.out
	assert_json_value "8" '.config | length' $DIR/curl.out
	assert_json_value "yes" '.config["strictHostKeyChecking"]' $DIR/curl.out
	assert_json_value "master" '.config["branch"]' $DIR/curl.out
	assert_json_value "Git Test" '.config["committerName"]' $DIR/curl.out
	assert_json_value "A@test.com" '.config["committerEmail"]' $DIR/curl.out
	assert_json_value "xml" '.config["format"]' $DIR/curl.out
	assert_json_value '${job.group}${job.name}-${job.id}.${config.format}' '.config["pathTemplate"]' $DIR/curl.out
	assert_json_not_null '.config["dir"]' $DIR/curl.out
	assert_json_not_null '.config["url"]' $DIR/curl.out

	test_succeed

	remove_project $project

}


main(){
	test_plugin_config_json "export" "git-export" "testscm2"

}

main