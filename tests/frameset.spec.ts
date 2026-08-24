import {test, expect} from '@playwright/test';

test('Courses frameset practice', async({page})=>{
  await page.goto('/playwright/frames/courses-frameset');
  let innertext = await  page.frameLocator("[name='content']").locator('h1').innerText();
  console.log(innertext);

  const sideNavBar = page.frameLocator("[name='navbar']");
    await sideNavBar.getByRole("link", { name: "Home" }).click();

    await sideNavBar.getByRole("link", { name: "Sample" }).click();
    await expect(page.frameLocator("[name='content']").locator('h1')).toContainText('Sample content');
        await sideNavBar.getByRole("link", { name: "Back to library" }).click();


})