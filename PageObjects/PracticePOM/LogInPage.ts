import {expect , Locator, Page} from "@playwright/test"
import { MainClass } from "./MainClass";


export class LogInPage{

        page:Page;
        userName: Locator;
        password: Locator;
        loginbutton: Locator;
    
        

    constructor (page:Page){
        this.page= page;
         this.userName= page.locator("#userEmail");
         this.password= page.locator("#userPassword");
         this.loginbutton= page.locator("#login");

    }

     async GoTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        }
     async validLogin( username: string, password: string)
     {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
         await this.page.waitForLoadState("networkidle");

        
     }
    

}
