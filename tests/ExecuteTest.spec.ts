import{test , expect} from "@playwright/test";
 import { LogInPage } from "../PageObjects/PracticePOM/LogInPage";
 import { MainClass } from "../PageObjects/PracticePOM/MainClass";

 test("Practice POM design " , async ({page})=>
{
    const mainClass= new MainClass(page);

    const username="anshika@gmail.com";
    const password= "Iamking@000";
    const login= mainClass.getLoginPage();
    await login.GoTo();
    await login.validLogin(username, password);
});