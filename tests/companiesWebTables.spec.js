import {test, expect} from '@playwright/test';

test('Companies web tables practice ', async ({page}) => {

    await page.goto('/playwright/tables/webtable');
    console.log('Number of rows in the table:', await page.locator('table[id="companies-table"] tbody tr').count());
    const countries = await page.locator('table[id="companies-table"] tbody tr td[data-col="country"]').allTextContents();
    console.log('Countries in the table:', countries);
    const isItalyPresent =countries.includes('Italy');
    console.log('Is Italy present in the table:', isItalyPresent);

const adobeContact = await page.locator('tr[data-testid="row-adobe"] td[data-col="contact"]').textContent();
    console.log('Adobe contact information:', adobeContact);
    expect(adobeContact).toBe('Yoshi Tannamuri');


    const adobeRow = await page.locator('tr[data-testid="row-adobe"] td').allTextContents();
    console.log('Adobe row information:', adobeRow);

    const contactByXPath = await page
  .locator("//td[text()='Adobe']/following-sibling::td[1]")
  .innerText();
      console.log('Adobe row information:', contactByXPath);




});