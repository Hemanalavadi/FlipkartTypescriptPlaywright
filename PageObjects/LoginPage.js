class LoginPage{
    constructor (page)
    {
        this.page=page;
        this.signInbutton= page.locator("[value='Login']");
        this.userName=page.locator("#userEmail");
        this.password= getByPlaceholder("enter your passsword");

    }

    async goTo()
    {
     await this.goTo("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username,password)
    {
         await this.userName.type(username);
         await this.password.type(this.password);
         await this.signInbutton.click();
         await page.waitForLoadState('networkidle');

    }
}
module.exports={LoginPage};