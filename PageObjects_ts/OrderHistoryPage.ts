import {expect, test , Locator, Page}from "@playwright/test";

export class OrderHistoryPage{

    page: Page;
    ordersTable: Locator;
    rows: Locator;
    orderedIdDetailes: Locator;

    
    constructor(page: Page)
    {
        this.page=page;
        this.ordersTable= page.locator("tbody");
        this.rows= page.locator("tbody tr");
        this.orderedIdDetailes= page.locator(".col-text");

    }
    async searchOrderAndSelect(orderId: any)
    {
        await this.ordersTable.waitFor();
        for(let i=0; i<await this.rows.count(); ++i)
       {
        const rowsOrderId =  await this.rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowsOrderId))
        {
            await this.rows.nth(i).locator("button").first().click();
            break;
        }
       }
    }
    async getOrderId()
    {
        return await this.orderedIdDetailes.textContent();
    }
}

