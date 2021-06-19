import { browser, Config, } from "protractor"
export let config: Config = {
    framework : 'custom',
    directConnect: false,
    
    frameworkPath : require.resolve("protractor-cucumber-framework"),
    //directConnect: true,
    seleniumAddress : 'http://localhost:4444/wd/hub',
   // SELENIUM_PROMISE_MANAGER : false,
    restartBrowserBetweenTests: true,
    baseUrl:"*****************",
    "capabilities": {
        'browserName': "chrome",
        chromeOptions:{
           
        }
    },
    specs: ["../../feature/login.feature"
      ],
    cucumberOpts: {
        format: "json:../../reports/report.json",
        require: ["../steps/steps.js","../hooks/*.js"],
        tags: "@smoke",
    },
    onPrepare: async () => {
      
        await browser.waitForAngularEnabled(false);
         },

    
    onComplete() {
        var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'json:../../reports/report.json',
        output: "./reports/report.html",
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "Test Report",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
    }
}

