const { test, expect } = require('@playwright/test');

test("End to End flow", async({page})=>{
    const email="anshika@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.getByRole('button', {name: 'Login'}).click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"}).click();

    await page.getByRole("listitem").getByRole("button",{name:"cart"}).click();
    await page.locator(" div li").first().waitFor();
    
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", {name: "Checkout"}).click();

     await page.getByPlaceholder("Select Country").pressSequentially("india");
      await page.getByRole("button",{name: "Ind"}).nth(1).click();
      await page.getByText("PLACE ORDER").click();
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
       await expect( page.getByText(" Thankyou for the order. ")).toBeVisible();
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

