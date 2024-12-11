({
        doInit : function(cmp) {
        var recordId = cmp.get("v.recordId");  
        cmp.set("v.canvasParameters", JSON.stringify({
                recordId,
                action: 'gd', 
                page: 'appops_release', 
                url: window.location.origin,
                error: '', 
                mode: 'lite',
                workManagementPlatform: 'AA',
                githubCode: '',
                bitbucketCode: '', 
                bitbucketWorkspace: '', 
        }));
    $A.enqueueAction(action);
    },
})