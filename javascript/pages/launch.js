"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Finder = (function () {
    function Finder() {
        this.toTheMenu = protractor_1.element(protractor_1.by.className("btn club-home-button shop-menu-btn"));
        this.address = protractor_1.element(protractor_1.by.css("#address-input"));
        this.totheMenu_Address = protractor_1.element(protractor_1.by.className("btn--honest blattgold--form-banner-submit"));
        this.customer_address = protractor_1.element(protractor_1.by.xpath("//div[@id='customer_address_container']/p/span"));
        this.cookie = protractor_1.element(protractor_1.by.className("agree-cookie"));
        this.cart = protractor_1.element(protractor_1.by.xpath("//a[@class='product--title']"));
    }
    return Finder;
}());
exports.Finder = Finder;
