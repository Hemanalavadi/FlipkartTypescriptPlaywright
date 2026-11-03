import {expect, Page , Locator } from "@playwright/test";


export class FlipcartLoginpage{

     page: Page;
     button: Locator;
     homeicon: Locator;
     shoeProduct: Locator;
    showPageVerify: Locator;

    constructor (page: Page)
    {
        this.page= page;
        this.button= page.locator("span[role='button']");
        //this.homeicon=page.locator("div[class='_1psv1zeb9 _1psv1ze0 _1psv1zedi']");
         this.homeicon = page.locator(".BHnOJf");

        this.shoeProduct= page.getByText("Comfy Feels", {exact: true});
        this.showPageVerify= page.locator("._Omnvo");

    }

    async gOTO()
    {
         await this.page.goto("https://www.flipkart.com/");
    }

    async clickButton(){
       await this.button.click();

    }

    async homepageverification(){
        await expect(this.homeicon).toBeVisible();
    }

    async shoeproducts(){
        //await this.shoeProduct.scrollIntoViewIfNeeded();
         await this.page.mouse.wheel(0, 200); 
        await this.shoeProduct.click();
          await expect(this.showPageVerify).toBeVisible();

    }
}