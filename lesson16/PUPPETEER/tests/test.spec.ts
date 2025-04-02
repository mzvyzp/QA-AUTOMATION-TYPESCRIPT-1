import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { TehnomaxPage } from '../src/pom/tehnomax.page';

describe('Puppeteer tehnomax positive test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let tehnomaxPage: TehnomaxPage;

    before(async () => {
        const slowMo = 180;
        browser = await puppeteer.launch({headless: false, slowMo, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        tehnomaxPage = new TehnomaxPage(page);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });
    it('should login to tehnomax page', async () => {
        await page.goto('https://www.tehnomax.me/', { waitUntil: 'domcontentloaded' });
        await tehnomaxPage.clickLoginButton();
        await tehnomaxPage.fillEmailInput('zvmykhailo@gmail.com');
        await tehnomaxPage.fillPasswordInput('Zvmykhailo0206_');
        await tehnomaxPage.clickSubmitButton();
        await tehnomaxPage.getUserDetails();
        const loggedUser = await tehnomaxPage.getLoggedUser();
        console.log('Logged user:', loggedUser);
        expect(loggedUser).to.include('mzv mzv');


    });
    it('add goods to favorite', async () => {
        await page.goto('https://www.tehnomax.me/', { waitUntil: 'domcontentloaded' });
        await tehnomaxPage.clickLoginButton();
        await tehnomaxPage.fillEmailInput('zvmykhailo@gmail.com');
        await tehnomaxPage.fillPasswordInput('Zvmykhailo0206_');
        await tehnomaxPage.clickSubmitButton();
        await tehnomaxPage.searchForGoods('usisivac dyson');
        await tehnomaxPage.clickSearchButton();
        await tehnomaxPage.addToFavoriteGoods();
        const goodName = await tehnomaxPage.getFavoriteGoodName();
        console.log('Favorite good:', goodName);
        await tehnomaxPage.getFavoriteGoods();
        await new Promise(resolve => setTimeout(resolve, 4000));
        const addedFavGood = await tehnomaxPage.getFavoriteGoodsList();
        console.log('Added favorite good:', addedFavGood);
        expect(addedFavGood).to.include(goodName);
    }
    );
});
