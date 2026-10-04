const { test, expect } = require('@playwright/test');

test('Verify sum of two numbers', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');

    await page.getByPlaceholder('Please enter first value').fill('1');

    await page.getByPlaceholder('Please enter second value').fill('4');

    await page.getByRole('button', { name: 'Get Sum' }).click();

    await expect(page.locator('#addmessage')).toHaveText('5');

});