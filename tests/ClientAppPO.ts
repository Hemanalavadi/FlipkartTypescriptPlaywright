import { test, expect } from '@playwright/test';
import {POManager} from "../PageObjects/POManager";
import {cartPage} from "../PageObjects/CartPage";
import { OrderHistoryPage } from '../PageObjects/OrderHistoryPage';


test("End to End flow for test ", async({page})=>{
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

