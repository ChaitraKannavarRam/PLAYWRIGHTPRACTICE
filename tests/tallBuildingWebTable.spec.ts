import {test, expect} from '@playwright/test';

test('Tall Building Web Table Practice ', async ({page}) => {
    await page.goto('/playwright/tables/webtable1');
    const builtYear = await page.locator('table[id="buildings-table"] tr:has(td:text("Taipei 101")) td[data-col="built"]').textContent();
    await expect(builtYear).toBe('2004');
    console.log('Taipei 101 built year:', builtYear);

    const heights = await page.locator('table[id="buildings-table"] tr td:nth-child(4)').allInnerTexts();  
    console.log('heightS:', heights);
    expect(heights).toEqual(['829m', '601m', '509m', '492m']);

    // rank of the row whose Country is Saudi Arabia (XPath)
const rank = await page
  .locator("//td[text()='Saudi Arabia']/following-sibling::td[4]")
  .innerText();
expect(rank).toBe('2');


const rankByCSS = await page.locator('tr:has(td:text("Saudi Arabia")) td[data-col="rank"]').innerText();
expect(rankByCSS).toBe('2');
console.log('Saudi Arabia rank:', rankByCSS);
});