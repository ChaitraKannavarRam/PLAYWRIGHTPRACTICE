import {test,expect} from '@playwright/test';

test('getByRole', async ({page})=>{
 await page.goto("/playwright/multiple_element_filter.html");
 await page.getByRole("textbox", { name: "Email Address" }).fill('standard_user');
 await page.getByRole("textbox", { name: "Password" }).fill('tta_secret');
 await page.getByRole("button", { name: "Login to Practice Account" }).click();


})