 const {LoginPage}= require('../PageObjects/LoginPage');
const {DashboardPage}=require("../PageObjects/DashboardPage");

class POManager{
    constructor(){
        this.page=this.page;
        this.loginPage= new LoginPage(this.page);
        this.dashboardPage= new DashboardPage(this.page);
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
module.exports={POManager};