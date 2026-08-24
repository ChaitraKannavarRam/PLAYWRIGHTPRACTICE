import {test, expect} from '@playwright/test';

test('Nested Iframes practice', async({page})=>{

 await page.goto('/playwright/frames/nested-iframes');
 const frame1 = page.frameLocator('#pact1');
 await frame1.locator('#inp_val').fill('Testing');
 await expect(frame1.locator('#inp_val')).toHaveValue('Testing');

const frame2 = frame1.frameLocator('#pact2');
await frame2.locator('#jex').fill('Playwright');
 await expect(frame2.locator('#jex')).toHaveValue('Playwright');

const frame3 = frame2.frameLocator('#pact3');
await frame3.locator('#glaf').fill('JS');
 await expect(frame3.locator('#glaf')).toHaveValue('JS');

 await expect(page.locator('h3').first()).toHaveText('Outer page · level 0');

 await frame1.locator('#inp_val').fill('Automation');
  await frame2.locator('#jex').fill('Cypress');
  await frame3.locator('#glaf').fill('Typescript');
 await expect(frame1.locator('#inp_val')).toHaveValue('Automation');
  await expect(frame2.locator('#jex')).toHaveValue('Cypress');
   await expect(frame3.locator('#glaf')).toHaveValue('Typescript');








})