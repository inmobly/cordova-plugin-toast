var specList = [
                '_specHelper', 'toast',
                 'toast.application',
                 'toast.inputdevice', 'toast.tvwindow', 'toast.tvchannel',
                 'toast.tvaudiocontrol', 'toast.media', 'toast.drminfo',
                 'toast.billing'
            ];
var testsuiteList = [
                        'toast.application', 'toast.inputdevice', 'toast.tvwindow',
                        'toast.tvchannel', 'toast.tvaudiocontrol', 'toast.media', 'toast.drminfo', 'ime', 'toast.billing'
                    ];

function specScriptLoad(spec) {
    var i;
    var script;

    for (i=0; i < spec.length; i++) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'spec/' + specList[spec[i]] + '.js';

        document.body.appendChild(script);
    }
}

function testsuiteScriptLoad(testsuite) {
    var i;
    var script;

    for (i=0; i < testsuite.length; i++) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'testsuite/' + testsuiteList[testsuite[i]] + '.js';

        document.body.appendChild(script);
    }
}

var specforDefault = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var testsuiteforDefault = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var specforWebOS = [0, 1, 2, 3, 6, 7, 9];
var testsuiteforWebOS = [0, 1, 4, 5, 7, 8];

var testsuiteforBrowser = [0, 1, 2, 3, 4, 5, 6];

var userAgent = navigator.userAgent;

if(userAgent.match('Web0S')) {
    specScriptLoad(specforWebOS);
    testsuiteScriptLoad(testsuiteforWebOS);
}
else if(userAgent.match('Chrome')) {
    specScriptLoad(specforDefault);
    testsuiteScriptLoad(testsuiteforBrowser);
}
else {
    specScriptLoad(specforDefault);
    testsuiteScriptLoad(testsuiteforDefault);
}
