import {test, expect} from '@playwright/test';

test('Svg locators practice', async({page})=>{
    await page.goto('/playwright/widgets/svg');

    const redCircle = page.getByLabel('Red circle');
    await redCircle.click();
    await expect(redCircle).toHaveClass('shape is-selected');

    const q2Bar = page.getByTestId('bar-q2');
    await q2Bar.click();
    await expect(q2Bar).toHaveAttribute('data-quarter', 'Q2');
    await expect(q2Bar).toHaveAttribute('data-value', '64');
    await expect(page.locator('#bars-output')).toContainText('Q2');
    await expect(page.locator('#bars-output')).toContainText('64');

    await page.getByRole('radio', {name: '4 stars'}).click();
    await expect(page.getByTestId('stars-readout')).toContainText('Rating: 4 / 5');
})