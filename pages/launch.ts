import { element, by, ElementFinder } from "protractor";

export class Finder {

   public toTheMenu = element(by.className("btn club-home-button shop-menu-btn"));
   public address = element(by.css("#address-input"));
   public totheMenu_Address = element(by.className("btn--honest blattgold--form-banner-submit"));
   public customer_address = element(by.xpath("//div[@id='customer_address_container']/p/span"));
   public cookie = element(by.className("agree-cookie"));
   public cart = element(by.className("title--off-canvas item-head"));
  public addtoCart = element(by.css(".content--cart-button"));
   prodcts = element.all(by.className("product--title"));
  

}

