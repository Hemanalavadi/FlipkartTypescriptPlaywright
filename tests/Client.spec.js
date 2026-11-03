const { test, expect } = require('@playwright/test');

test("End to End flow check", async({page})=>{
    const email="anshika@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles= await page.locator(".card-body b").allTextContents();
    console.log(titles);
      const products= await page.locator(".card-body");
    const productName= await page.locator("text=ZARA COAT 3").textContent();
    const count  = await products.count();
     for( let i=0; i< count; i++)
     {
            if(await products.nth(i).locator("b").textContent() === productName)
            {
                    await products.nth(i).locator("text= Add To Cart").click();
                    console.log("count and compare is done");
                    break;
                     
            }
     }
    await page.locator("[routerlink*='cart']").click();
    await page.locator(" div li").first().waitFor();
    // const bool=  await page.locator("h3: has-text('ZARA COAT 3')").isVisible();
    //  await expect(bool).toBeTruthy();
     await page.locator("text=Checkout").click();
   //  await page.locator("[class='input txt text-validated ng-pristine ng-valid ng-touched']").fill("anshika@d.co");
     await page.locator("[placeholder='Select Country']").type("ind",{delay:100});
       const dropdown= page.locator(".ta-results");
      await  dropdown.waitFor();
     const optionscount= await dropdown.locator("button").count();
     console.log("count is "+ optionscount);

     for(let i=0; i<optionscount; i++)
     {
      const text= await  dropdown.locator("button").nth(i).textContent();
       if(text.trim() ==="India")
       {
        await dropdown.locator("button").nth(i).click();
        break;

       }
     }
      
      expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);
      // await page.locator(".action__submit").click();
     
     await page.locator("[class='input txt text-validated']").first().fill("256389754123");
     test.setTimeout(60000);
    /* const month =  page.locator("select.input ddl").first();
      await month.waitFor();
      await month.selectOption("5"); 
      const date= page.locator("[select.input ddl").last();
      await date.waitFor();
       await date.selectOption("22"); */

       await page.locator("[class='input txt']").first().fill("256");  
       test.setTimeout(60000);
        await page.locator("[class='input txt']").last().fill("card owner name");
        await page.locator(".action__submit").click();
       await expect( page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderId);
      await page.locator("button[routerlink*='myorders']").click();
      console.log("clicking order btton ");
      await page.locator("tbody").waitFor();
      
      const rows= await page.locator("tbody tr");
       for(let i=0; i<await rows.count(); ++i)
       {
        const rowsOrderId =  await rows.nth(i).locator("th").textContent();
        console.log("displaying order name in loop "+ rowsOrderId);
        if(orderId.includes(rowsOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
       }
      const orderIdDetails= await page.locator(".col-title").textContent();
       expect(orderId.includes(orderIdDetails)).toBeTruthy();

     await page.pause();



}); 

