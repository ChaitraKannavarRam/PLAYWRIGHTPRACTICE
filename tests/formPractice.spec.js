import {test,expect} from '@playwright/test';

test('QA Practice Form', async ({page}) => {
   await page.goto('/playwright/tables/practice#page');
   await page.getByLabel('First name').fill('Chaitra');
   await expect(page.getByLabel('First name')).toHaveValue('Chaitra');
   await page.getByLabel('Last name').fill('KR');
   await expect(page.getByLabel('Last name')).toHaveValue('KR');


   await page.getByRole('radio', {name: 'Female'}).check({force:true});
  await expect(page.getByTestId('gender-male')).not.toBeChecked();

   await page.getByTestId('years-experience').selectOption('5');
   await expect(page.getByTestId('years-experience')).toHaveValue('5');

   await page.getByTestId('profile-date').fill('2024-06-10');
   await expect(page.getByTestId('profile-date')).toHaveValue('2024-06-10');

       await page.getByRole('radio', {name: 'Automation Tester'}).check();

       for (const tool of ['Selenium Webdriver', 'UFT']) {

       await page.getByRole('checkbox', {name: tool}).check();
       await expect(page.getByRole('checkbox', {name: tool})).toBeChecked();
    }


       let checkedContinentCount = 0;
       for (const continent of ['Asia', 'Europe', 'North America']) {

       await page.getByRole('checkbox', {name: continent}).check();
       await expect(page.getByRole('checkbox', {name: continent})).toBeChecked();
       checkedContinentCount++;
    }

    await expect(checkedContinentCount).toBe(3);

    await page.getByRole('tab', {name: 'Wait Commands'}).click();
    await expect(page.locator('#selenium-tab-panel')).toContainText('wait until conditions are met');

    await page.getByLabel('Upload Image').setInputFiles('./avatat.png');
    await expect(page.locator('#upload-file-name')).toContainText('avatat.png');

    const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('download-file').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('sample-download.txt');
  await download.saveAs('downloads/sample-download.txt');

await page.getByRole('button', {name: 'Save profile'}).click();

const output = await page.locator('#submission-output').textContent();
console.log('Submission Output:', output);
expect(output).toContain('Chaitra');
expect(output).toContain('KR');
expect(output).toContain('Female');
expect(output).toContain('5');
expect(output).toContain('2024-06-10');
expect(output).toContain('Automation Tester');
expect(output).toContain('Selenium Webdriver');
expect(output).toContain('UFT');






});