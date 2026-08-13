import {test, expect} from '@playwright/test';

async function selectValue(page, label, value) {
   const trigger = page.locator('.select-trigger').filter({ hasText: label });
   await trigger.click();

   const option = page.locator('.select-option').filter({ hasText: value });
   await option.click();

   await expect(page.locator('.select-trigger.is-filled')).toContainText(value);
}

async function confirmSingleSelectionPerDropdown(page) {
   const dropdowns = page.locator('.select-shell');
   const count = await dropdowns.count();

//    for (let i = 0; i < count; i++) {
      await expect(dropdowns.nth(0).locator('.select-option.is-selected')).toHaveCount(1);
   }
// }

test('Custom dropdown practice ', async ({page}) => {
   await page.goto('/playwright/tables/dropdowns');

   await selectValue(page, 'Choose your preferred programming language', 'JavaScript');
   await confirmSingleSelectionPerDropdown(page);
});
   