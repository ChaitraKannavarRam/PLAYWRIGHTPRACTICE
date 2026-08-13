import {test,expect} from '@playwright/test';

test('Open Widget page', async ({page})=>{
    await page.goto('/playwright/webtable');
    // select checkbox by username with XPath
await page.locator(
  "//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
).click();

// same idea using CSS :has()
await page
  .locator("tr:has(td:text('Rohan.Mehta'))")
  .locator("td")
  .first()
  .click();

// get all data after the username column
const userData = await page
  .locator("//td[text()='Priya.Nair']/following-sibling::td")
  .allInnerTexts();

console.log(userData);

});