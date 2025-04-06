import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { TehnomaxPage } from '../src/pom/tehnomax.page';

describe('Puppeteer tehnomax positive test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let tehnomaxPage: TehnomaxPage;

    before(async () => {
        const slowMo = 80;
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
        await tehnomaxPage.goTo();
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
        await tehnomaxPage.goTo();
        await tehnomaxPage.clickLoginButton();
        await tehnomaxPage.fillEmailInput('zvmykhailo@gmail.com');
        await tehnomaxPage.fillPasswordInput('Zvmykhailo0206_');
        await tehnomaxPage.clickSubmitButton();
        await tehnomaxPage.searchForGoods('usisivac dyson');
        await tehnomaxPage.clickSearchButton();
        await tehnomaxPage.addToFavoriteGoods();
        await tehnomaxPage.getFavoriteGoods();
        await tehnomaxPage.getFavProductDetails();
        await tehnomaxPage.removeGoodFromFav();
        await tehnomaxPage.getFavoriteGoods();
        const removedFavGood = await tehnomaxPage.getEmptyFavList();
        expect(removedFavGood).to.include('Nemate proizvoda');

    }
    );
});
