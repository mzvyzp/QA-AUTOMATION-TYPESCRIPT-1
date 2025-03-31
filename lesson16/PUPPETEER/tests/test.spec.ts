import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { TehnomaxPage } from '../src/pom/tehnomax.page';

describe('Puppeteer tehnomax positive test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let tehnomaxPage: TehnomaxPage;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        tehnomaxPage = new TehnomaxPage(page);
        page.setDefaultTimeout(4000);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });
    it('should login to tehnomax page', async () => {
        await page.goto('https://www.tehnomax.me/', { waitUntil: 'load' });
        await tehnomaxPage.clickLoginButton();
        await tehnomaxPage.fillEmailInput('zvmykhailo@gmail.com');
        await tehnomaxPage.fillPasswordInput('Zvmykhailo0206_');
        await tehnomaxPage.clickSubmitButton();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await tehnomaxPage.getUserDetails();
        await new Promise(resolve => setTimeout(resolve, 4000));
        const loggedUser = await tehnomaxPage.getLoggedUser();
        console.log('Logged user:', loggedUser);
        await new Promise(resolve => setTimeout(resolve, 4000));
        expect(loggedUser).to.include('M. M.');


    });
    it('add goods to favorite', async () => {
        await page.goto('https://www.tehnomax.me/', { waitUntil: 'load' });
        await tehnomaxPage.clickLoginButton();
        await tehnomaxPage.fillEmailInput('zvmykhailo@gmail.com');
        await tehnomaxPage.fillPasswordInput('Zvmykhailo0206_');
        await tehnomaxPage.clickSubmitButton();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await tehnomaxPage.searchForGoods('usisivac dyson');
        await tehnomaxPage.clickSearchButton();
        await new Promise(resolve => setTimeout(resolve, 6000));
        await tehnomaxPage.addToFavoriteGoods();
        await new Promise(resolve => setTimeout(resolve, 6000));
        const goodName = await tehnomaxPage.getFavoriteGoodName();
        console.log('Favorite good:', goodName);
        await new Promise(resolve => setTimeout(resolve, 4000));
        await tehnomaxPage.getFavoriteGoods();
        await new Promise(resolve => setTimeout(resolve, 4000));
        const addedFavGood = await tehnomaxPage.getFavoriteGoodsList();
        console.log('Added favorite good:', addedFavGood);
        expect(addedFavGood).to.include(goodName);
    }
    );
});
