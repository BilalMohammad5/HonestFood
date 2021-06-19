import { browser , ElementFinder, ExpectedConditions, protractor } from "protractor";
let EC = protractor.ExpectedConditions;

export  class Helper {

async click(element){
await browser.wait(EC.elementToBeClickable(element), 3000, "element  not present")
let data:ElementFinder = element;
   await data.click().then( function () {
     console.log("element clicked");
   });
  
}
async enterText(element,text){
  let data:ElementFinder = element;
   browser.wait(EC.elementToBeClickable(element), 5000, "element  not present")
  await data.sendKeys(text);
  console.log("text entered");
    
  }
}