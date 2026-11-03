const {test, expect}=  require('@playwright/test');
// const { use } = require('react');


/*test('first playwright test ', async ({browser})=>
{
    const context= await browser.newContext();
    const page= await context.newPage();
     await page.goto("https://www.udemy.com/");

});*/

test('test', async({page})=>
{
 await page.goto("https://www.google.com/");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");

});

test('playwright browser content ',async({browser})=>
{
  const userName= page.locator("#username");
  const signIn= page.locator("#signInBtn");

  const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await userName.type("rahulshettyacademy");
    await page.locator("[name='password']").type("learning");
    await signIn.click();
   
    // type fill
     await userName.fill("");
     await userName.fill("rahulshettyacademy");
     await signIn.click();




});
