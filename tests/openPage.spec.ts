import {test, expect} from '@playwright/test';

test('Open Widget page', async ({page})=>{
    await page.goto('/playwright/widgets/expect.html');
    expect(page).toHaveTitle("Nope");
});