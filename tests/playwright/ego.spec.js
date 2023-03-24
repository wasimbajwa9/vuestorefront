const {test, expect} = require('@playwright/test');

const URL = 'http://localhost:3000/default/ego';

test('New Products Exists', async ({page}) => {
    await page.goto(URL);
    const carousalDiv = page.locator('.ac-products-carousel');
    await expect(carousalDiv).toContainText("Discover Our New Products");
});