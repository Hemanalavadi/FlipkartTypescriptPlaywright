import { Page } from "@playwright/test";
import { LogInPage } from "./LogInPage";


export class MainClass{

     page: Page;
     loginpage: LogInPage;


    constructor (page: Page){

        this.page=page;
        this.loginpage= new LogInPage(this.page);
    }
     
    getLoginPage(){
        return this.loginpage;
    }
}

    