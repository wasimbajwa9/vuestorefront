const {test, expect} = require('@playwright/test');

const URL = 'http://localhost:3000/default/ego';

test('New Products section Exists', async ({page}) => {
    await page.goto(URL);
    const carousalDiv = page.locator('.ac-products-carousel');
    await expect(carousalDiv).toContainText("Discover Our New Products");
});

test('Previous Slide Arrows', async ({page}) => {
    await page.goto(URL);
    await page.waitForSelector("ul.glide__slides.sf-carousel__slides");
    await expect(page.locator('button[data-testid="carousel-prev-button"]')).toBeVisible();
});

test('Next Slide Arrows', async ({page}) => {
    await page.goto(URL);
    await page.waitForSelector("ul.glide__slides.sf-carousel__slides");
    await expect(page.locator('button[data-testid="carousel-next-button"]')).toBeVisible();
});

test('Image gets rendered', async ({page}) => {
    await page.goto(URL);
    await page.waitForSelector("ul.glide__slides.sf-carousel__slides");
    const count = await page.locator('.ac-product-card span[data-testid="image-wrapper"]').count();
    await expect(count).toBeGreaterThan(0);
});
