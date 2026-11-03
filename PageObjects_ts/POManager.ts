
import {LoginPage} from "./LoginPage";
import {DashboardPage} from "./DashboardPage";
import {cartPage} from "./CartPage";
import {OrderHistoryPage} from "./OrderHistoryPage";
import{Page} from "@playwright/test";

export class POManager{

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    orderHistoryPage: OrderHistoryPage;
    cartPage  : cartPage;
    page: Page;

    constructor(page:Page){
        this.page=page;
        this.loginPage= new LoginPage(this.page);
        this.dashboardPage= new DashboardPage(this.page);
        this.orderHistoryPage= new OrderHistoryPage(this.page);
        this.cartPage= new cartPage(this.page);
    }

    getLoginPage()
    {
         return this.loginPage;
    }

    getdashboardPage()
    {
        return this.dashboardPage;
    }
}
//module.exports={POManager};