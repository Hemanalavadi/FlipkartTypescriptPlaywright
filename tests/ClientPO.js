const { test, expect } = require('@playwright/test');
const {POManager}=require("../PageObjects/POManager");
const {cartPage}=require("../PageObjects/CartPage");
const { OrderHistoryPage } = require('../PageObjects/OrderHistoryPage');


test("End to End flow", async({page})=>{
    const poManager= new POManager(page);

    const username="anshika@gmail.com";
    const password="Iamking@000";
    const productName="ZARA COAT 3";
    const products= page.locator(".card-body");
    const loginPage= poManager.getLoginPage();
    await loginPage.goTo();
    loginPage.validLogin(username,password);
     const dashboardPage= poManager.getdashboardPage();
   await dashboardPage.searchProductAddcaart(productName);
    await dashboardPage.navigateTocart();

    const cartPage= poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

    const ordersReviewPage= poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India"); 
    const orderId= await ordersReviewPage.submitAndgetOrderId();
    console.log(orderId);
    await dashboardPage.navigateToOrders();

    const ordersHistoryPage = poManager.getOrdersHistoryPage();
     await ordersHistoryPage.searchCountryAndSelect(orderId);
     expect(orderId.includes(await OrderHistoryPage.getOrderId())).toBeTruthy();
    
      const orderIdDetails= await page.locator(".col-title").textContent();
       expect(orderId.includes(orderIdDetails)).toBeTruthy();

     await page.pause();



}); 

