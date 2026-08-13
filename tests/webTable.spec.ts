import {test,expect} from '@playwright/test';

test('Select calendar date for flights', async ({page}) =>{
     await page.goto('/playwright/widgets/calendar');
     await page.getByTestId('trigger-depart').click();
     await page.getByRole('button', { name: "Monday, August 10 2026" }).click();
     await page.getByTestId('trigger-return').click();
    await page.getByRole('button', { name: "Saturday, September 12 2026" }).click();
     await page.getByTestId('trigger-depart').click();
    await page.getByTestId('picker-clear').click();
    await page.getByTestId('trigger-depart').click();
    await expect(page.getByRole('button', { name: "Saturday, August 1 2026" })).toBeDisabled();
    

    });