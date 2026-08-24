import {test, expect} from '@playwright/test';

test('iframe practice', async({page})=>{

    await page.goto('/playwright/frames/');
    const myFrame=  page.frameLocator('#frame-one');
    await myFrame.locator('#RESULT_TextField-1').fill('TATA');
    await myFrame.locator('#RESULT_TextField-2').fill('Chaitra');
    await myFrame.locator('#RESULT_TextField-3').fill('KA-17 H 1234');
    await myFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await myFrame.locator('#RESULT_TextField-4').fill('2026');
    await myFrame.locator('#RESULT_TextArea-1').fill('Registration done.');
    await myFrame.getByTestId('vehicle-submit').click();
    await expect(myFrame.locator('#vehicle-output')).toContainText('Chaitra');



})

test('iframe set', async({page})=>{

 await page.goto('/playwright/frames/multi-frames');
  const header=  page.frameLocator("[name='main']").locator('h2');
   console.log(await header.innerText());
   const myframes= await page.locator('//frame').all();
   console.log(await myframes.length)

for (const frameEle of myframes) {
    console.log(await frameEle.getAttribute('name'), ': ', await frameEle.getAttribute('src'));
  }

   // page.frames() includes the main page frame too
  console.log(page.frames().length);

})