import { Expect, Page, Locator } from "@playwright/test";
import { FlipcartLoginpage} from "./FlipcartLoginpage.ts";



export class ManagePages{

    page: Page;
     loginpage:FlipcartLoginpage;


    constructor(page: Page)
    {
        this.page=page;
        this.loginpage= new FlipcartLoginpage(this.page);

    }

    getloginPage(){
        return this.loginpage;

    }
}