import { expect } from '@wdio/globals';
import { LoginPage } from '../pageobjects/login.page';
import { browser } from '@wdio/globals';
import Page from 'test/pageobjects/page';
import { FavouritesPage } from 'test/pageobjects/favourites.page';
import { SearchPage } from 'test/pageobjects/search-goods.page';
//import { ProductDetailPage } from 'test/pageobjects/product-detail.page';
//import SecurePage from '../pageobjects/secure.page';

let page: Page;
let loginPage: LoginPage;
let favouritesPage: FavouritesPage;
let searchPage: SearchPage;
//let productDetailsPage: ProductDetailPage;


beforeEach(async () => {
    //const slowMo = 80;
    await browser.setWindowSize(1200, 800);
    await browser.maximizeWindow();
    page = new Page();
    loginPage = new LoginPage();
    favouritesPage = new FavouritesPage();
    searchPage = new SearchPage();
    //productDetailsPage = new ProductDetailPage();
});
afterEach(async () => {
    await browser.reloadSession();
});

describe('tehnomax', () => {
    it('should login with valid credentials', async () => {
        await page.open();
        await loginPage.login('zvmykhailo@gmail.com', 'Zvmykhailo0206_');
        await expect(loginPage.userSelector).toHaveText(expect.stringContaining('mzv mzv'));
    });

    it('search goods and add to favorites', async () => {
        await page.open();
        await loginPage.login('zvmykhailo@gmail.com', 'Zvmykhailo0206_');
        await searchPage.searchForGoods('usisivac dyson');
        await favouritesPage.goToFavourites();
        //await productDetailsPage.goodDetails();
        //await productDetailsPage.removeFromFavourites();
        await favouritesPage.deleteFromFavourites();
        await favouritesPage.goToFavourites();
        expect(favouritesPage.emptyFavorites).toHaveText('Nemate proizvoda');
    });
});
