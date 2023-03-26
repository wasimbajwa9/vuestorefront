const {test, expect} = require('@playwright/test');

const URL = 'http://localhost:3000/default/ego';

test('New Products section Exists', async ({page}) => {
    await page.goto(URL);
    const carousalDiv = page.locator('.ac-products-carousel');
    await expect(carousalDiv).toContainText("Discover Our New Products");
});

test('Previous Slide Arrows', async ({page}) => {
    await page.goto(URL);
    const slides = page.locator('ul.glide__slides li');
    if(slides.count > 4){
        await expect(page.getByTestId('carousel-prev-button')).toBeVisible();
    }else{
        await expect(page.getByTestId('carousel-prev-button')).toBeHidden();
    }
});

test('Next Slide Arrows', async ({page}) => {
    await page.goto(URL);
    const slides = page.locator('ul.glide__slides li');
    if(slides.count > 4){
        await expect(page.getByTestId('carousel-next-button')).toBeVisible();
    }else{
        await expect(page.getByTestId('carousel-next-button')).toBeHidden();
    }
});