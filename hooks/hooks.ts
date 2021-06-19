const { BeforeAll, After, AfterAll, Status, Before, beforeEach} = require("@cucumber/cucumber");
import { Finder } from "../pages/launch";
import { protractor, WebDriver } from "protractor"

import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
import { DriverProvider } from "protractor/built/driverProviders";
let ObjFinder: Finder = new Finder();
let finder: Finder; 
BeforeAll({ timeout: 100 * 1000 }, async () => {
  browser.manage().window().maximize();
});

Before( {},async function () {

});
After(async function (Scenario) {
     await browser.manage().deleteAllCookies();
    await browser.executeScript('window.sessionStorage.clear();');
     await browser.executeScript('window.localStorage.clear();');
    if (Scenario.result.status === Status.FAILED) {
       const screenshot = await  browser.takeScreenshot();
       
       Scenario.attach(screenshot,"result.png")  
    }

});

AfterAll(async () => {
    await console.log("test run ended");

});
