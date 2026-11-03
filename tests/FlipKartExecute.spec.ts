import test, { Expect, Page, Locator } from "@playwright/test";
import { FlipcartLoginpage } from "../FlipCart/FlipcartLoginpage";
import {ManagePages} from "../FlipCart/ManagePages";


test.only("Flipkart for POM ", async({page})=>
{
     const managePages= new ManagePages(page);
      const homepage= managePages.getloginPage();
      await homepage.gOTO();
      await homepage.clickButton();
      await homepage.homepageverification();
      await homepage.shoeproducts();


});