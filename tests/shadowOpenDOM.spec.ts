import {test, expect} from '@playwright/test';

test('Shadow Open DOM Practice', async ({page})=>{

    await page.goto('/playwright/widgets/shadow-dom');
    await page.getByTestId('card-account-email').fill('standard@gmail.com');
await page.getByTestId('card-account-password').fill('1234');
    await page.getByTestId('card-account-submit').click();
await expect(page.locator('#card-output')).toContainText('standard@gmail.com');


// 2) tta-counter — accessible-name targeting works through shadow
const cart = page.getByTestId('counter-cart');
await cart.getByRole('button', { name: 'Increment' }).click();
await cart.getByRole('button', { name: 'Increment' }).click();
await expect(cart.getByTestId('counter-value')).toHaveText('5');

// 3) Nested shadow — one selector reaches both layers
await page
  .getByTestId('nested-host')
  .locator('tta-input-card[data-testid="card-inside"] input[name="email"]')
  .fill('inside@example.com');

// Explicit traversal still works if you prefer it readable
await page
  .locator('tta-nested')
  .locator('tta-input-card')
  .locator('input[name="email"]')
  .fill('inside@example.com');

    
})