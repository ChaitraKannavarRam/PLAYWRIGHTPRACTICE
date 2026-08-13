import {test, expect} from '@playwright/test';

test('Employees web table practice', async ({page}) => {
    await page.goto('/playwright/tables/webtable');

    
    for (let i = 1; i <= 3; i++) {
        await page.getByTestId(`page-${i}`).click();
        await expect(page.getByTestId(`page-${i}`)).toHaveAttribute('aria-current', 'page');
        
        await page.locator('table[id="employees-table"] tbody tr td[data-col="name"]').allTextContents().then(contents => {
            if (contents.includes('Priya Kapoor')) {
                console.log('Found Priya Kapoor in the page:', i);
            }
        });
     

         const emailAddresses = await page.locator('table[id="employees-table"] tbody tr td[data-col="email"]').allTextContents();
        console.log('Email addresses in the table:', emailAddresses);
        for (const email of emailAddresses) {
            const isEmailPresent = email.includes('@tta.dev');
            console.log('Is @tta.dev email present in the row:', isEmailPresent, 'Email:', email);

    }
}

    while (await page.getByTestId('next-page').isEnabled()) {
            await page.getByTestId('next-page').click();

}

// PATTERN 4 — Assert page-summary after jumping to page 2

await page.getByTestId('page-2').click();
await page.getByTestId('page-summary').toHaveText('Showing 9–16 of 24');

   
});