import { expect } from '@wdio/globals';
import { LoginPage } from '../pageobjects/login.page';
import { browser } from '@wdio/globals';
import Page from 'test/pageobjects/page';
import { FavouritesPage } from 'test/pageobjects/favourites.page';
import { SearchPage } from 'test/pageobjects/search-goods.page';


let page: Page;
let loginPage: LoginPage;
let favouritesPage: FavouritesPage;
let searchPage: SearchPage;


beforeEach(async () => {
    await browser.setWindowSize(1200, 800);
    await browser.maximizeWindow();
    page = new Page();
    loginPage = new LoginPage();
    favouritesPage = new FavouritesPage();
    searchPage = new SearchPage();
    await page.open();
    await loginPage.login('userMail', 'password');
});
afterEach(async () => {
    await browser.reloadSession();
});

describe('tehnomax', () => {
    it('should login with valid credentials', async () => {
        await expect(loginPage.userSelector).toHaveText(expect.stringContaining('mzv mzv'));
    });

    it('search goods and add to favorites', async () => {
        await searchPage.searchForGoods('usisivac dyson');
        await favouritesPage.goToFavourites();
        await favouritesPage.deleteFromFavourites();
        await favouritesPage.goToFavourites();
        expect(favouritesPage.emptyFavorites).toHaveText('Nemate proizvoda');
    });
});
