const messages = {
    Edit: 'Edit',
    Save: 'Save',
    Delete: 'Delete',
    Cancel: 'Cancel',
    Revert: 'Revert',
    jobAverageDurationPlaceholder: 'leave blank for Job Average duration',
    resourcesEditor: {
        'Dispatch to Nodes': 'Dispatch to Nodes',
        Nodes: 'Nodes'
    },
    uiv: {
        modal: {
            cancel: "Cancel",
            ok: "OK"
        }
    },
    cron: {
        section: {
            0: 'Seconds',
            1: 'Minutes',
            2: 'Hours',
            3: 'Day of Month',
            4: 'Month',
            5: 'Day of Week',
            6: 'Year'
        }
    },
    message_communityNews: 'Community News',
    message_connectionError: 'It appears an error occured when connecting to Community News.',
    message_readMore: 'Read More',
    message_refresh: 'Please refresh the page or visit us at',
    message_subscribe: 'Subscribe',
    message_delete: 'Delete this field',
    message_duplicated: 'Field already exists',
    message_select: 'Select a Field',
    message_description: 'Description',
    message_fieldLabel: 'Field Label',
    message_fieldKey: 'Field Key',
    message_fieldFilter: 'Type to filter a field',
    message_empty: 'Can be empty',
    message_cancel: 'Cancel',
    message_add: 'Add',
    message_addField: 'Add Custom Field',
    message_pageUsersSummary: 'List of Rundeck users.',
    message_pageUsersLoginLabel: 'Username',
    message_pageUsersCreatedLabel: 'Created',
    message_pageUsersUpdatedLabel: 'Updated',
    message_pageUsersLastjobLabel: 'Last Job Execution',
    message_domainUserFirstNameLabel: 'First Name',
    message_domainUserLastNameLabel: 'Last Name',
    message_domainUserEmailLabel: 'Email',
    message_domainUserLabel: 'User',
    message_pageUsersTokensLabel: 'N\u00BA Tokens',
    message_pageUsersTokensHelp: 'You can administrate the tokens in the User Profile page.',
    message_pageUsersLoggedStatus: 'Status',
    message_pageUserLoggedOnly: 'Logged In Users Only',
    message_pageUserNotSet: 'Not Set',
    message_pageUserNone: 'None',
    message_pageFilterLogin: 'Login',
    message_pageFilterHostName: 'Host Name',
    message_pageFilterSessionID: 'Session ID',
    message_pageFilterBtnSearch: 'Search',
    message_pageUsersSessionIDLabel: 'Session ID',
    message_pageUsersHostNameLabel: 'Host Name',
    message_pageUsersLastLoginInTimeLabel: 'Last Login',
    message_pageUsersTotalFounds: 'Total Users Found',
    message_paramIncludeExecTitle: 'Show Last Execution',
    message_loginStatus: {
        'LOGGED IN': 'Logged In',
        'NOT LOGGED': 'Never',
        'ABANDONED': 'Expired',
        'LOGGED OUT': 'Logged Out'
    },
    message_userSummary: {
        desc: 'This is a list of User Profiles which have logged in to Rundeck.'
    },
    message_webhookPageTitle:'Webhooks',
    message_webhookListTitle:'Webhooks',
    message_webhookDetailTitle:'Webhook Detail',
    message_webhookListNameHdr:'Name',
    message_addWebhookBtn:'Add',
    message_webhookEnabledLabel:'Enabled',
    message_webhookPluginCfgTitle:'Plugin Configuration',
    message_webhookSaveBtn:'Save',
    message_webhookCreateBtn:'Create Webhook',
    message_webhookDeleteBtn:'Delete',
    message_webhookPostUrlLabel:'Post URL',
    message_webhookPostUrlHelp:'When a HTTP POST request to this URL is received, the Webhook Plugin chosen below will receive the data.',
    message_webhookPostUrlPlaceholder:'URL will be generated after the Webhook is created',
    message_webhookNameLabel:'Name',
    message_webhookUserLabel:'User',
    message_webhookUserHelp:'The authorization username assumed when running this webhook. All ACL policies matching this username will apply.',
    message_webhookRolesLabel:'Roles',
    message_webhookRolesHelp:'The authorization roles assumed when running this webhook (comma separated). All ACL policies matching these roles will apply.',
    message_webhookAuthLabel: 'HTTP Authorization String',
    message_webhookGenerateSecurityLabel: "Use Authorization Header",
    message_webhookGenerateSecretCheckboxHelp: "[Optional] A Webhook authorization string can be generated to increase security of this webhook. All posts will need to include the generated string in the Authorization header.",
    message_webhookSecretMessageHelp: "Copy this authorization string now. After you navigate away from this webhook you will no longer be able to see the string.",
    message_webhookRegenClicked:'A new authorization string will be generated and displayed when the webhook is saved.',
    message_webhookPluginLabel:'Choose Webhook Plugin',
    message_hello: 'hello world',
    message_sidebarNotificationText: 'Rundeck update available',
    message_updateAvailable: 'Update Available',
    message_updateHasBeenReleased: 'An update to Rundeck has been released.',
    message_installedVersion: 'The installed version of Rundeck is',
    message_currentVersion: 'The most recent release of Rundeck is',
    message_getUpdate: 'Get Update',
    message_dismissMessage: 'To dismiss this notification until the next release, please click here.',
    message_close: 'Close',
    'bulk.edit': 'Bulk Edit',
    'in.of': 'in',
    'execution': 'Execution | Executions',
    'execution.count': '1 Execution | {0} Executions',
    'Bulk Delete Executions: Results': 'Bulk Delete Executions: Results',
    'Requesting bulk delete, please wait.': 'Requesting bulk delete, please wait.',
    'bulkresult.attempted.text': '{0} Executions were attempted.',
    'bulkresult.success.text': '{0} Executions were successfully deleted.',
    'bulkresult.failed.text': '{0} Executions could not be deleted:',
    'delete.confirm.text': 'Really delete {0} {1}?',
    'clearselected.confirm.text': 'Clear all {0} selected items, or only items shown on this page?',
    'bulk.selected.count': '{0} selected',
    'results.empty.text': 'No results for the query',
    'Only shown executions': 'Only shown executions',
    'Clear bulk selection': 'Clear Bulk Selection',
    'Click to edit Search Query': 'Click to edit Search Query',
    'Auto refresh': 'Auto refresh',
    'error.message.0': 'An Error Occurred: {0}',
    'info.completed.0': 'Completed: {0}',
    'info.completed.0.1': 'Completed: {0} {1}',
    'info.missed.0.1': 'Marked Missed: {0} {1}',
    'info.started.0': 'Started: {0}',
    'info.started.expected.0.1': 'Started: {0}, Estimated Finish: {1}',
    'info.scheduled.0': 'Scheduled; starting {0}',
    'job.execution.starting.0': 'Starting {0}',
    'job.execution.queued': 'Queued',
    'info.newexecutions.since.0': '1 New Result. Click to load. | {0} New Results. Click to load.',
    'In the last Day': 'In the last Day',
    'Referenced': 'Referenced',
    'job.has.been.deleted.0': '(Job {0} has been deleted)',
    'Filters': 'Filters',
    'filter.delete.named.text': 'Delete Filter "{0}"...',
    'Delete Saved Filter': 'Delete Saved Filter',
    'filter.delete.confirm.text': 'Are you sure you want to delete the Saved Filter named "{0}"?',
    'filter.save.name.prompt': 'Name:',
    'filter.save.validation.name.blank': 'Name Cannot be blank',
    'filter.save.button': 'Save Filter...',
    'failed': 'failed',
    'ok': 'ok',
    '0.total': '{0} total',

    period: {
        label: {
            All: 'any time',
            Hour: 'in the last Hour',
            Day: 'in the last Day',
            Week: 'in the last Week',
            Month: 'in the last Month'
        }
    },
    CreateAcl: 'Create ACL',
    CreateAclName: 'ACL Description',
    CreateAclTitle: 'Create Key Storage ACL for the project',
    'Edit Nodes': 'Edit Nodes',
    'Modify': 'Modify',
    'Edit Node Sources': 'Edit Node Sources',
    'The Node Source had an error': 'The Node Source had an error',
    'Validation errors': 'Validation errors',

    'unauthorized.status.help.1': 'Some Node Source returned an "Unauthorized" message.',
    'unauthorized.status.help.2': 'The Node Source plugin might need access to the Key Storage Resource. it could be enabled by Access Control Policy entries.',
    'unauthorized.status.help.3': 'Please be sure that the ACL policies enable "read" access to the Key Storage in this project for the project URN path (urn:project:name). ',
    'unauthorized.status.help.4': 'Go to {0} to create a Project ACL ',
    'unauthorized.status.help.5': 'Go to {0} to create a System ACL ',

    'acl.config.link.title': 'Project Settings > Access Control',
    'acl.config.system.link.title': 'System Settings > Access Control',
    'acl.example.summary': 'Example ACL Policy',

    'empty.message.default': 'None configured. Click {0} to add a new plugin.',

    'page.keyStorage.description': 'Key Storage provides a global directory-like structure to save Public and Private Keys and Passwords, for use with Node Execution authentication.',

    "bulk.delete": "Bulk Delete",
    "select.none": "Select None",
    "select.all": "Select All",
    "cancel.bulk.delete": "Cancel Bulk Delete",
    "delete.selected.executions": "Delete Selected Executions",
    "click.to.refresh": "click to refresh",
    "count.nodes.matched": "{0} {1} Matched",
    "count.nodes.shown": "{0} nodes shown.",
    "delete.this.filter":"Delete this Filter",
    "delete.this.filter.confirm": "Really delete this filter?",
    "saved.filters": "Saved Filters",
    "save.node.filter": "Save Node Filter",
    "name.prompt": "Name",
    "delete.saved.node.filter": "Delete Saved Node Filter",
    "duplicate": "Duplicate",
    "enter.a.node.filter": "Enter a node filter, or .* for all nodes",
    "execute.locally": "Execute locally",
    "execution.page.show.tab.Nodes.title": "Nodes",
    "execution.show.mode.Log.title": "Log Output",
    "filter": "Filter",
    "loading.matched.nodes": "Loading matched nodes...",
    "loading.text": "Loading...",
    "loglevel.normal": "Normal",
    "loglevel.debug": "Debug",
    "matched.nodes.prompt": "Matched Nodes",
    "no": "No",
    "node.access.not-runnable.message": "You do not have access to execute commands on this node.",
    "Node.count.vue": "Nodes | Node | Nodes",
    "node.filter": "Node Filter",
    "node.filter.exclude": "Exclude Filter",
    "node.metadata.os": "Operating System",
    "node.metadata.status": "Status",
    "nodes": "Nodes",
    "notification.event.onfailure": "On Failure",
    "notification.event.onsuccess": "On Success",
    "notification.event.onstart": "On Start",
    "notification.event.onavgduration": "Average Duration Exceeded",
    "notification.event.onretryablefailure": "On Retryable Failure",
    "refresh": "refresh",
    "search.ellipsis": "Search\u2026",
    "save.filter.ellipsis": "Save Filter",
    "scheduledExecution.property.defaultTab.label": "Default Tab",
    "scheduledExecution.property.defaultTab.description": "Default tab to display when you follow an execution.",
    "scheduledExecution.property.excludeFilterUncheck.label": "Show Excluded Nodes",
    "scheduledExecution.property.excludeFilterUncheck.description": "If true, the excluded nodes will be indicated when running the Job. Otherwise they will not be shown at all.",
    "scheduledExecution.property.logOutputThreshold.label": "Log Output Limit",
    "scheduledExecution.property.logOutputThreshold.description": "Enter either maximum total line-count (e.g. \"100\"), maximum per-node line-count (\"100/node\"), or maximum log file size (\"100MB\", \"100KB\", etc.), using \"GB\",\"MB\",\"KB\",\"B\" as Giga- Mega- Kilo- and bytes.",
    "scheduledExecution.property.logOutputThreshold.placeholder": "E.g as '100', '100/node' or '100MB'",
    "scheduledExecution.property.logOutputThresholdAction.description": "Action to perform if the output limit is reached.",
    "scheduledExecution.property.logOutputThresholdAction.halt.label": "Halt with status:",
    "scheduledExecution.property.logOutputThresholdAction.label": "Log Limit Action",
    "scheduledExecution.property.logOutputThresholdAction.truncate.label": "Truncate and continue",
    "scheduledExecution.property.logOutputThresholdStatus.placeholder": "'failed','aborted', or any string",
    "scheduledExecution.property.loglevel.help": "Debug level produces more output",
    "scheduledExecution.property.maxMultipleExecutions.description": "Max number of multiple executions. Use blank or 0 to indicate no limit.",
    "scheduledExecution.property.maxMultipleExecutions.label": "Limit Multiple Executions?",
    "scheduledExecution.property.multipleExecutions.description": "Allow this Job to be executed more than one time simultaneously?",
    "scheduledExecution.property.nodeKeepgoing.false.description": "Fail the step without running on any remaining nodes.",
    "scheduledExecution.property.nodeKeepgoing.prompt": "If a node fails",
    "scheduledExecution.property.nodeKeepgoing.true.description": "Continue running on any remaining nodes before failing the step.",
    "scheduledExecution.property.nodeRankAttribute.description": "Node attribute to order by. Default is node name.",
    "scheduledExecution.property.nodeRankAttribute.label": "Rank Attribute",
    "scheduledExecution.property.nodeRankOrder.label": "Rank Order",
    "scheduledExecution.property.nodeRankOrder.ascending.label": "Ascending",
    "scheduledExecution.property.nodeRankOrder.descending.label": "Descending",
    "scheduledExecution.property.nodeThreadcount.label": "Thread Count",
    "scheduledExecution.property.nodeThreadcount.description": "Maximum number of parallel threads to use. (Default: 1)",
    "scheduledExecution.property.nodefiltereditable.label": "Editable filter",
    "scheduledExecution.property.nodesSelectedByDefault.false.description": "The user has to explicitly select target nodes",
    "scheduledExecution.property.nodesSelectedByDefault.label": "Node selection",
    "scheduledExecution.property.nodesSelectedByDefault.true.description": "Target nodes are selected by default",
    "scheduledExecution.property.notifyAvgDurationThreshold.description": "Optional duration threshold to trigger the notifications. If not specified, the Job Average duration will be used.\n\n" +
        "- percentage of average: `20%`\n" +
        "- time delta from the average: `+20s`, `+20`\n" +
        "- absolute time: `30s`, `5m`\n" +
        "Use `s`,`m`,`h`,`d`,`w`,`y` etc as time units for seconds, minutes, hours, etc.\n" +
        "Unit will be seconds if it is not specified.\n\n" +
        "Can include option value references like `{'$'}{'{'}option{'.'}avgDurationThreshold{'}'}`.",
    "scheduledExecution.property.notifyAvgDurationThreshold.label": "Threshold",
    "scheduledExecution.property.orchestrator.label": "Orchestrator",
    "scheduledExecution.property.orchestrator.description": "This can be used to control the order and timing in which nodes are processed",
    "scheduledExecution.property.retry.delay.description": "The time between the failed execution and the retry. Time in seconds, " +
        "or specify time units: \"120m\", \"2h\", \"3d\".  Use blank or 0 to indicate no delay. Can include option value " +
        "references like \"{'$'}{'{'}option{'.'}delay{'}'}\".",
    "scheduledExecution.property.retry.description": "Maximum number of times to retry execution when this job is directly invoked.  Retry will occur if the job fails or times out, but not if it is manually killed. Can use an option value reference like \"{'$'}{'{'}option{'.'}retry{'}'}\".",
    "scheduledExecution.property.successOnEmptyNodeFilter.false.description": "Fail the job.",
    "scheduledExecution.property.successOnEmptyNodeFilter.prompt": "If node set empty",
    "scheduledExecution.property.successOnEmptyNodeFilter.true.description": "Continue execution.",
    "scheduledExecution.property.timeout.description": "The maximum time for an execution to run. Time in seconds, " +
        "or specify time units: \"120m\", \"2h\", \"3d\".  Use blank or 0 to indicate no timeout. Can include option value " +
        "references like \"{'$'}{'{'}option{'.'}timeout{'}'}\".",
    "scheduledExecution.property.scheduleEnabled.description": "Allow this Job to be scheduled?",
    "scheduledExecution.property.scheduleEnabled.label": "Enable Scheduling?",
    "scheduledExecution.property.executionEnabled.description": "Allow this Job to be executed?",
    "scheduledExecution.property.executionEnabled.label": "Enable Execution?",
    "scheduledExecution.property.timezone.prompt": "Time Zone",
    "scheduledExecution.property.timezone.description": "A valid Time Zone, either an abbreviation such as \"PST\", a full name such as \"America/Los_Angeles\",or a custom ID such as \"GMT-8{':'}00\".",
    "documentation.reference.cron.url": "https{':'}//www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",
    "set.as.default.filter": "Set as Default Filter",
    "show.all.nodes": "Show all nodes",
    "yes": "Yes",
    // job query field labels
    "jobquery.title.titleFilter": "Adhoc Command",
    "jobquery.title.contextFilter": "Context",
    "jobquery.title.actionFilter": "Action",
    "jobquery.title.maprefUriFilter": "Resource URI",
    "jobquery.title.reportIdFilter": "Name",
    "jobquery.title.tagsFilter": "Tags",
    "jobquery.title.nodeFilter": "Node",
    "jobquery.title.nodeFilter.plural": "Nodes",
    "jobquery.title.messageFilter": "Message",
    "jobquery.title.reportKindFilter": "Report Type",
    "jobquery.title.recentFilter": "Within",
    "jobquery.title.actionTypeFilter": "Action",
    "jobquery.title.itemTypeFilter": "Item Type",
    "jobquery.title.filter": "Filter",
    "jobquery.title.jobFilter": "Name",
    "jobquery.title.idlist": "ID",
    "jobquery.title.jobIdFilter": "ID",
    "jobquery.title.descFilter": "Description",
    "jobquery.title.objFilter": "Resource",
    "jobquery.title.scheduledFilter": "Scheduled",
    "jobquery.title.serverNodeUUIDFilter": "Server Node UUID",
    "jobquery.title.typeFilter": "Type",
    "jobquery.title.cmdFilter": "Command",
    "jobquery.title.userFilter": "User",
    "jobquery.title.projFilter": "Project",
    "jobquery.title.statFilter": "Result",
    "jobquery.title.startFilter": "Start Time",
    "jobquery.title.startbeforeFilter": "Start Before",
    "jobquery.title.startafterFilter": "Start After",
    "jobquery.title.endbeforeFilter": "End Before",
    "jobquery.title.endafterFilter": "End After",
    "jobquery.title.endFilter": "Time",
    "jobquery.title.durationFilter": "Duration",
    "jobquery.title.outFilter": "Output",
    "jobquery.title.objinfFilter": "Resource Info",
    "jobquery.title.cmdinfFilter": "Command Info",
    "jobquery.title.groupPath": "Group",
    "jobquery.title.summary": "Summary",
    "jobquery.title.duration": "Duration",
    "jobquery.title.loglevelFilter": "Loglevel",
    "jobquery.title.loglevelFilter.label.DEBUG": "Debug",
    "jobquery.title.loglevelFilter.label.VERBOSE": "Verbose",
    "jobquery.title.loglevelFilter.label.INFO": "Information",
    "jobquery.title.loglevelFilter.label.WARN": "Warning",
    "jobquery.title.loglevelFilter.label.ERR": "Error",
    "jobquery.title.adhocExecutionFilter": "Job Type",
    "jobquery.title.adhocExecutionFilter.label.true": "Command",
    "jobquery.title.adhocExecutionFilter.label.false": "Defined Command",
    "jobquery.title.adhocLocalStringFilter": "Script Content",
    "jobquery.title.adhocRemoteStringFilter": "Shell Command",
    "jobquery.title.adhocFilepathFilter": "Script File Path",
    "jobquery.title.argStringFilter": "Script File Arguments",
    "page.unsaved.changes": "You have unsaved changes",
    "edit.nodes.file": "Edit Nodes File",
    "project.node.file.source.label": "Source",
    "file.display.format.label": "Format",
    "project.node.file.source.description.label": "Description",
    "project.nodes.edit.save.error.message": "Error Saving Content:",
    "project.nodes.edit.empty.description": "Note: No content was available.",
    "button.action.Cancel": "Cancel",
    "button.action.Save": "Save",
    'job-edit-page': {
        'nodes-tab-title': 'Nodes & Runners',
        'node-dispatch-true-label': 'Dispatch to Nodes through Runner',
        'node-dispatch-false-label': 'Run on Runner',
        'section-title': 'Dispatch',
        'section-title-help': 'Choose the Runner and its selected Nodes'
    },
    'job-exec-page': {
        'nodes-tab-title': 'Runner/Nodes'
    },
    JobRunnerEdit: {
        section: {
            title: 'Runner Set'
        }
    },
    gui: {
        menu: {
            Nodes: 'Nodes',
        },
    },
    search: "Search",
    browse: "Browse",
    result: "Result\:",
    actions: "Actions",
    none:"None",
    set: {
        "all.nodes.as.default.filter": "Set All Nodes as Default Filter",
        "as.default.filter": "Set as Default Filter",
    },
    remove: {
        "all.nodes.as.default.filter": "Remove All Nodes as Default Filter",
        "default.filter": "Remove Default Filter",
    },
    "run.a.command.on.count.nodes.ellipsis": "Run a command on {0} {1}",
    "create.a.job.for.count.nodes.ellipsis": "Create a job for {0} {1}",
    "resource.metadata.entity.tags":"Tags",
    filters: "Filters",
    "all.nodes": "All Nodes",
    "delete.this.filter.ellipsis": "Delete this Filter ...",
    "enter.a.filter": "Enter a Filter",
    "remove.all.nodes.as.default.filter": "Remove All Nodes as Default Filter",
    "set.all.nodes.as.default.filter": "Set All Nodes as Default Filter",
    "not.authorized": "Not authorized",
    "disabled.execution.run": "Executions are disabled.",
    "user.at.host": "User {'@'} Host",
    "node.changes.success": "Node changes were saved successfully.",
    "node.changes.notsaved": "Node changes were not saved.",
    "node.remoteEdit.edit": "Edit node:",
    "node.remoteEdit.continue": "Continue...",
    "node": "Node",
    "this.will.select.both.nodes": "This will select both nodes.",
    "node.metadata.hostname": "Hostname",
    "select.nodes.by.name": "Select nodes by name",
    "filter.nodes.by.attribute.value": "Filter nodes by attribute value",
    "use.regular.expressions": "Use Regular Expressions:",
    "regex.syntax.checking": "Regex syntax checking",
    "edit.ellipsis": "Edit...",
    "node.metadata.username-at-hostname": "User & Host",
    "node.metadata.osFamily":"OS Family",
    "node.metadata.osName":"OS Name",
    "node.metadata.osArch":"OS Architecture",
    "node.metadata.osVersion":"OS Version",
    "node.metadata.type":"Type",
    "node.metadata.username":"Username",
    "node.metadata.tags":"Tags",
    "button.Edit.label": "Edit",
    "default.paginate.prev": "-",
    "default.paginate.next": "+",
    "jump.to": "Jump to",
    "per.page": "Per Page",
    "remove.default.filter": "Remove Default Filter",
    "scheduledExecution.action.edit.button.label":"Edit this Job…",
    "scheduledExecution.action.duplicate.button.label":"Duplicate this Job…",
    "scheduledExecution.action.duplicate.other.button.label":"Duplicate this Job to another Project…",
    "scheduledExecution.action.download.button.label":"Download Definition",
    "scheduledExecution.action.downloadformat.button.label":"Download Job definition in {0}",
    "scheduledExecution.action.delete.button.label":"Delete this Job",
    "scheduledExecution.action.edit.button.tooltip":"Edit this Job",
    "scheduledExecution.action.duplicate.button.tooltip":"Duplicate Job",
    "enable.schedule.this.job":"Enable Schedule",
    "disable.schedule.this.job":"Disable Schedule",
    "scheduledExecution.action.enable.schedule.button.label":"Enable Schedule",
    "scheduledExecution.action.disable.schedule.button.label":"Disable Schedule",
    "scheduleExecution.schedule.disabled":"Job schedule is disabled",
    "enable.execution.this.job":"Enable Execution",
    "disable.execution.this.job":"Disable Execution",
    "scheduledExecution.action.enable.execution.button.label":"Enable Execution",
    "scheduledExecution.action.disable.execution.button.label":"Disable Execution",
    "scheduleExecution.execution.disabled":"Job execution is disabled",
    "delete.this.job":"Delete this Job",
    "action.prepareAndRun.tooltip":"Choose options and Run Job…",
    "job.bulk.modify.confirm.panel.title":"Confirm Bulk Job Modification",

    "job.bulk.delete.confirm.message":"Really delete the selected Jobs?",
    "job.bulk.disable_schedule.confirm.message":"Disable schedules for all selected Jobs?",
    "job.bulk.enable_schedule.confirm.message":"Enable schedules for all selected Jobs?",
    "job.bulk.disable_execution.confirm.message":"Disable execution for all selected Jobs?",
    "job.bulk.enable_execution.confirm.message":"Enable execution for all selected Jobs?",

    "job.bulk.disable_schedule.button":"Disable Schedules",
    "job.bulk.enable_schedule.button":"Enable Schedules",
    "job.bulk.delete.button":"Delete Jobs",
    "job.bulk.disable_execution.button":"Disable Execution",
    "job.bulk.enable_execution.button":"Enable Execution",
    "job.bulk.enable_execution.success":"Enabled execution for {0} jobs.",
    "job.bulk.enable_schedule.success":"Enabled schedule for {0} jobs.",
    "job.bulk.disable_schedule.success":"Disabled schedule for {0} jobs.",
    "job.bulk.disable_execution.success":"Disabled execution for {0} jobs.",
    "job.bulk.delete.success":"Deleted {0} jobs.",
    "delete.selected.jobs":"Delete Selected Jobs",
    "job.bulk.panel.select.title":"Select Jobs for Bulk Edit",
    "job.bulk.perform.action.menu.label":"Perform Action",
    "job.create.button":"Create a new Job",
    "job.upload.button.title":"Upload a Job definition",
    "cancel":"Cancel",
    'job.actions':'Job Actions',
    'job.bulk.activate.menu.label':'Bulk Edit…',
    'job.bulk.deactivate.menu.label':'Exit Bulk Edit Mode',
    'upload.definition.button.label':'Upload Definition',
    'new.job.button.label':'New Job',
    'job.bulk.panel.select.message':'{n} Job Selected | {n} Jobs Selected',
    'cannot.run.job':'Cannot run job',
    "disabled.schedule.run": "Executions are disabled.",
    "disabled.job.run": "Executions are disabled.",
    "schedule.on.server.x.at.y":'Scheduled to run on server {0} at {1}',
    "schedule.time.in.future":"in {0}",
    "never":"Never",
    "disabled":"Disabled",
    "project.schedule.disabled": "Project schedule is disabled",
    "project.execution.disabled": "Project execution is disabled",
    "job.schedule.will.never.fire":"Job schedule will never fire",
    "scm.import.status.UNKNOWN.display.text": "Import Status: Not Tracked",
    "scm.import.status.LOADING.description": "Import: Job status is loading",
    "scm.export.status.DELETED.display.text": "Deleted",
    "scm.export.status.EXPORT_NEEDED.display.text": "Modified",
    "scm.export.status.CLEAN.description": "Export Status: Clean",
    "scm.import.status.DELETE_NEEDED.title.text": "Import: Files deleted",
    "scm.export.status.EXPORT_NEEDED.title.text": "Export: Modified",
    "scm.import.status.UNKNOWN.description": "Not Tracked for SCM Import",
    "scm.import.status.REFRESH_NEEDED.display.text": "Synch Needed",
    "scm.export.status.CREATE_NEEDED.description": "Export Status: New Job, Not yet added to SCM",
    "scm.import.status.DELETE_NEEDED.description": "Import Status: Source file was deleted",
    "scm.export.status.CLEAN.display.text": "No Change",
    "scm.export.status.LOADING.description": "Export: Job status is loading",
    "scm.import.status.IMPORT_NEEDED.description": "Import Status: Job changes need to be pulled",
    "scm.import.status.REFRESH_NEEDED.title.text": "Import: Synch changes",
    "scm.export.status.REFRESH_NEEDED.title.text": "Export: Remote changes need to be synched",
    "scm.export.status.LOADING.display.text": "Loading",
    "scm.export.status.EXPORT_NEEDED.description": "Export Status: Modified",
    "scm.export.status.CREATE_NEEDED.display.text": "Created",
    "scm.import.status.IMPORT_NEEDED.display.text": "Import Needed",
    "scm.import.status.DELETE_NEEDED.display.text": "Source file was deleted",
    "scm.import.status.IMPORT_NEEDED.title.text": "Import: Incoming changes",
    "scm.import.status.CLEAN.display.text": "Up to date",
    "scm.import.status.CLEAN.description": "Import Status: Up to date",
    "scm.import.status.REFRESH_NEEDED.description": "Import Status: Job changes need to be pulled",
    "scm.export.status.REFRESH_NEEDED.display.text": "Synch Needed",
    "scm.import.status.LOADING.display.text": "Loading",
    "scm.action.diff.clean.button.label": "View Commit Info",
    "scm.import.plugin": "SCM Import Plugin",
    "scm.action.diff.button.label": "Diff Changes",
    "scm.export.commit.job.link.title": "Click to commit or add this Job",
    "scm.export.commit.link.title": "Click to commit or add changes",
    "scm.export.plugin": "SCM Export Plugin",
    "job.toggle.scm.menu.on": "Toggle SCM On",
    "job.toggle.scm.menu.off": "Toggle SCM Off",
    "scm.import.actions.title": "SCM Import Actions",
    "scm.export.actions.title": "SCM Export Actions",
    "scm.export.title": "SCM Export",
    "scm.import.title": "SCM Import",
    "job.toggle.scm.button.label.off": "Disable SCM",
    "job.toggle.scm.confirm.panel.title": "Confirm SCM Modification",
    "job.toggle.scm.confirm.on": "Enable all SCM configured plugins?",
    "job.toggle.scm.confirm.off": "Disable all SCM configured plugins?",
    "job.toggle.scm.button.label.on": "Enable SCM",
    "page.section.Activity.for.jobs":"Activity for Jobs",
    "widget.theme.title":"Theme",
    "widget.nextUi.title":"Enable Next UI",
    "page.section.title.AllJobs":"All Jobs",
    "advanced.search":"Advanced",
    "jobs.advanced.search.title":"Click to modify filter",
    "filter.jobs":"Search Jobs",
    "job.filter.quick.placeholder":"Search",
    "job.filter.apply.button.title":"Search",
    "job.filter.clear.button.title":"Clear Search",
    "all":"All",
    "job.tree.breakpoint.hit.info":"Notice: Not all Job detail was loaded because this group contains too many jobs. Click the button to load missing detail.",
    "job.tree.breakpoint.load.button.title":"Load All Job Detail",
    "app.firstRun.title": "Welcome to {0} {1}",
    "you.can.see.this.message.again.by.clicking.the": "You can see this message again by clicking the",
    "version.number": "version number",
    "in.the.page.footer": "in the page footer.",
    "no.authorized.access.to.projects": "",
    "no.authorized.access.to.projects.contact.your.administrator.user.roles.0": "",
    "page.home.loading.projects": "Loading Projects",
    "app.firstRun.md": "",
    "page.home.section.project.title": "{0} Project",
    "page.home.section.project.title.plural": "{0} Projects",
    "page.home.duration.in.the.last.day": "In the last day",
    "by": "by",
    "user": "User",
    "user.plural": "Users",
    "page.home.project.executions.0.failed.parenthetical": "({0} Failed)",
    "page.home.search.projects.input.placeholder": "",
    "page.home.search.project.title": "{0} Project found",
    "page.home.search.project.title.plural": "{0} Projects found",
    "button.Action": "Action",
    "edit.configuration": "Edit Configuration",
    "page.home.new.project.button.label": "New Project",
    "Execution": "Execution",
    "Execution.plural": "Executions",
    "in": "in",
    "Project.plural": "Projects",
}

export default messages;