import { browser, protractor, element, by, } from "protractor";
const { BeforeAll, After, AfterAll, Status, beforeEach } = require("@cucumber/cucumber");
import { Given, When, Then, Before } from "@cucumber/cucumber"
let EC = protractor.ExpectedConditions;
import { Finder } from "../pages/launch";
import { Helper } from "../Helper/Helper";
import { DriverProvider } from "protractor/built/driverProviders";
import { isAssertionExpression } from "typescript";
var { setDefaultTimeout } = require('@cucumber/cucumber');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
setDefaultTimeout(60 * 1000);

let objects = new Finder();
let helper = new Helper();
let cart = "The item has been successfully added to cart";
var expectedTitle = new String("Clubkitchen- Dein Lieferservice für die besten Onlinerestaurants | Clubkitchen");
console.log("expected title is" + "  " + expectedTitle);

Given(/^user launches Clucb Kitchen  Application$/, async () => {
    console.log("Login initated for test user");
    browser.get("https://staging.clubkitchen.at/");
    await browser.getTitle().then(function (actualtitle) {
        console.log(actualtitle);

        if (actualtitle === "Clubkitchen- Dein Lieferservice für die besten Onlinerestaurants | Clubkitchen") {
            console.log("user is on club kitchen homepage")
            helper.click(objects.cookie);
        } else {
            console.log("user is on wrong domain" + " " + actualtitle);
            fail();
        }

    });
});
When('user clicks to the Menu and enters {string}', async (address) => {
    console.log("inside")
    await helper.click(objects.toTheMenu).then(function () {
    });
    await helper.enterText(objects.address, address).then(async () => {

    });
    await helper.click(objects.totheMenu_Address).then(async () => {

    });

});
Then('user should be able to see restraunts page as per {string}', async (address) => {
    await browser.getTitle().then(async (resTitle) => {


        if (resTitle === "Mamacita Menü- Burritos zu dir nach Hause geliefert | Clubkitchen") {

            console.log("user is on restraunt page")
        } else {
            console.log("user is on wrong page" + resTitle)
            fail();
        }

    });

    await browser.wait(EC.visibilityOf(objects.customer_address), 20000, "cart not found");

    await objects.customer_address.getText().then(async (adrress_text) => {

        if (adrress_text === address) {
            console.log("Deliver address is set to" + "  " + adrress_text)

        } else {
            console.log("Delivery address is set wrong" + "  " + adrress_text);
            fail();
        }

    });

});
Then('user adds  {string} to cart', async (product) => {
    //browser.sleep(10000);
    let list = await element.all(by.xpath("//button[@class='buybox--button bare-element']//*[text()]"));
    console.log(list.length)
    await browser.sleep(5000);

    for (let index = 1; index <= 38; index++) {

        var ele = element(by.xpath("(//button[@class='buybox--button bare-element']//*[text()])[" + index + "]"));
        let data = await ele.getText()

        console.log(data);
        console.log("/n")
        if (data == product) {
            console.log("inside if")
            await element(by.xpath("(//button[@class='buybox--button--image-overlay'])[" + index + "]")).click();
            console.log("add to cart clicked");

            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]).then(function () {
                    helper.click(objects.addtoCart);

                    let addtocart = element(by.xpath("//div[@class='alert--content']//font/font")).getText();
                    expect(addtocart).toBe("The item has been successfully added to cart");
                    console.log("item added to cart")
                    //do your stuff on the pop up window
                });
            });
        } else {
            console.log("item adding failed");
            fail();
        }



    }
});

