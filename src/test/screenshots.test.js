const timeout = process.env.SLOWMO ? 30000 : 10000;
const devices = require('puppeteer/DeviceDescriptors');

beforeAll(async () => {
    await page.setViewport({ width: 375, height: 812, isMobile: true});
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Take screenshots', () => {
    test('Emulate Mobile Device And take screenshot', async () => {
        await page.setViewport({ width: 375, height: 812, isMobile: true});
        await page.goto(URL, {waitUntil: 'domcontentloaded'});
        await page.screenshot({
            path: './src/test/screenshots/home-mobile.jpg',
            fullpage: true,
            type: 'jpeg'
        });
    }, timeout);
});