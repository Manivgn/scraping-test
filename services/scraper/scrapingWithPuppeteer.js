import puppeteer, { Puppeteer } from 'puppeteer'

export default async function scrapFromGoogle() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com/search?q=master+mql+fsdm');
    const titles = await page.$$eval('h3', elements => {
        return elements.map(el => el.textContent);
    })
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        console.log(element);
        
    }
    await browser.close();
};