"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var _a = require("@cucumber/cucumber"), BeforeAll = _a.BeforeAll, After = _a.After, AfterAll = _a.AfterAll, Status = _a.Status, beforeEach = _a.beforeEach;
var cucumber_1 = require("@cucumber/cucumber");
var EC = protractor_1.protractor.ExpectedConditions;
var launch_1 = require("../pages/launch");
var Helper_1 = require("../Helper/Helper");
var setDefaultTimeout = require('@cucumber/cucumber').setDefaultTimeout;
setDefaultTimeout(60 * 1000);
var objects = new launch_1.Finder();
var helper = new Helper_1.Helper();
var expectedTitle = new String("Clubkitchen- Dein Lieferservice für die besten Onlinerestaurants | Clubkitchen");
console.log("expected title is" + "  " + expectedTitle);
cucumber_1.Given(/^user launches Clucb Kitchen  Application$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Login initated for test user");
                protractor_1.browser.get("https://staging.clubkitchen.at/");
                return [4, protractor_1.browser.getTitle().then(function (actualtitle) {
                        console.log(actualtitle);
                        if (actualtitle === "Clubkitchen- Dein Lieferservice für die besten Onlinerestaurants | Clubkitchen") {
                            console.log("user is on club kitchen homepage");
                            helper.click(objects.cookie);
                        }
                        else {
                            console.log("user is on wrong domain" + " " + actualtitle);
                            fail();
                        }
                    })];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.When('user clicks to the Menu and enters {string}', function (address) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("inside");
                return [4, helper.click(objects.toTheMenu).then(function () {
                    })];
            case 1:
                _a.sent();
                return [4, helper.enterText(objects.address, address).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2];
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4, helper.click(objects.totheMenu_Address).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2];
                        });
                    }); })];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then('user should be able to see restraunts page as per {string}', function (address) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, protractor_1.browser.getTitle().then(function (resTitle) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (resTitle === "Mamacita Menü- Burritos zu dir nach Hause geliefert | Clubkitchen") {
                            console.log("user is on restraunt page");
                        }
                        else {
                            console.log("user is on wrong page" + resTitle);
                            fail();
                        }
                        return [2];
                    });
                }); })];
            case 1:
                _a.sent();
                return [4, protractor_1.browser.wait(EC.visibilityOf(objects.customer_address), 20000, "cart not found")];
            case 2:
                _a.sent();
                return [4, objects.customer_address.getText().then(function (adrress_text) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (adrress_text === address) {
                                console.log("Deliver address is set to" + "  " + adrress_text);
                            }
                            else {
                                console.log("Delivery address is set wrong" + "  " + adrress_text);
                                fail();
                            }
                            return [2];
                        });
                    }); })];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then('user adds  {string} to cart', function (product) { return __awaiter(_this, void 0, void 0, function () {
    var list, index, ele, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, protractor_1.element.all(protractor_1.by.xpath("//button[@class='buybox--button bare-element']//*[text()]"))];
            case 1:
                list = _a.sent();
                console.log(list.length);
                return [4, protractor_1.browser.sleep(5000)];
            case 2:
                _a.sent();
                index = 1;
                _a.label = 3;
            case 3:
                if (!(index <= 38)) return [3, 7];
                ele = protractor_1.element(protractor_1.by.xpath("(//button[@class='buybox--button bare-element']//*[text()])[" + index + "]"));
                return [4, ele.getText()];
            case 4:
                data = _a.sent();
                console.log(data);
                console.log("/n");
                if (!(data == product)) return [3, 6];
                console.log("inside if");
                return [4, protractor_1.element(protractor_1.by.xpath("(//button[@class='buybox--button--image-overlay'])[" + index + "]")).click()];
            case 5:
                _a.sent();
                return [3, 6];
            case 6:
                index++;
                return [3, 3];
            case 7: return [2];
        }
    });
}); });
