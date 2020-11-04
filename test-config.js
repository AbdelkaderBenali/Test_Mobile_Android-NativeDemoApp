exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [   
        './api/home.js',
        './api/webView.js',
        './api/login.js',
        './api/signUp.js',
        './api/forms.js',
       './api/swipe.js'
    ],
    capabilities: [
        {
            "platformName": "Android",
            "automationName": "UiAutomator2",
            "udid": "75P7Z9IF99999999",
            "appPackage": "com.wdiodemoapp",
            "appActivity": ".MainActivity",
        }
    ]
}