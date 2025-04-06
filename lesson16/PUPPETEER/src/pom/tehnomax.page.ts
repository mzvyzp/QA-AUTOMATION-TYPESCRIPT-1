import { Locator, Page } from 'puppeteer';

export class TehnomaxPage {

    private get loginButton(): Locator<Element> {
        return this.page.locator('div.user-wraper a');
    }

    private get emailInput(): Locator<Element> {
        return this.page.locator('div.login-wrapper input[placeholder="Email adresa *"]');
    }

    private get passwordInput(): Locator<Element> {
        return this.page.locator('div.login-wrapper input[type="password"]');
    }

    private get submitButton(): Locator<Element> {
        return this.page.locator('div.login-wrapper input[value="PRIJAVITE SE"]');
    }

    private get userDetails(): Locator<Element> {
        return this.page.locator('div.user-logged span');
    }

    private get loggedUser(): Locator<Element> {
        return this.page.locator(this.userSelector);
    }

    private userSelector = 'div.account-menu-wrap h1.heading a';

    private get searchGoods(): Locator<Element> {
        return this.page.locator('[id="fnc-search_form"] input[type="text"]');
    }

    private get searchButton(): Locator<Element> {
        return this.page.locator('input[id="search_btn"]');
    }

    private get addToFavorite(): Locator<Element> {
        return this.page.locator('div.js-product-grid-wrap div:nth-child(4) div.not-checked-wish');
    }

    private get favoriteGoodName(): Locator<Element> {
        return this.page.locator('div.js-product-grid-wrap div:nth-child(4) div.product-name-grid');
    }

    private get favoriteGoods(): Locator<Element> {
        return this.page.locator('div[class="wish-list-wrap js-wish-list-wrap"] a img');
    }

    private get favoriteGoodsList(): Locator<Element> {
        return this.page.locator('div.product-name-grid');
    }

    private get removeFromFavorite(): Locator<Element> {
        return this.page.locator('i[class="remove-item js-remove-item"] path');
    }

    private get confirmRemoveFromFav(): Locator<Element> {
        return this.page.locator('div[data-remodal-id="modal"] button.remodal-confirm');
    }

    private get favProductDetails(): Locator<Element> {
        return this.page.locator('a.product-link');
    }

    private get removeGoodfromfav(): Locator<Element> {
        return this.page.locator('div[class="relativediscount-mobile-align web-view"] div[class="checked-wish checked_wish_new"]');
    }

    public constructor(private page: Page) {};

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.tehnomax.me/');
        await this.loginButton.wait();
    }

    public async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    public async fillEmailInput(value: string): Promise<void> {
        await this.emailInput.fill(value);
    }

    public async fillPasswordInput(value: string): Promise<void> {
        await this.passwordInput.fill(value);
    }

    public async clickSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }

    public async getUserDetails(): Promise<void> {
        await this.userDetails.click();
    }

    public async getLoggedUser(): Promise<string | null> {
        const element = await this.page.waitForSelector('div.account-menu-wrap h1.heading a'); // select the element
        if (!element) {
            throw new Error('Element not found: div.account-menu-wrap h1.heading a');
        }
        const user = await element.evaluate(el => el.textContent);
        return user;
    }
    public async searchForGoods(value: string): Promise<void> {
        await this.searchGoods.fill(value);
    }

    public async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    public async addToFavoriteGoods(): Promise<void> {
        await this.addToFavorite.click();
    }

    public async getFavoriteGoodName(): Promise<string | null> {
        const element = await this.page.waitForSelector('div.js-product-grid-wrap div:nth-child(4) div.product-name-grid'); // select the element
        if (!element) {
            throw new Error('Element not found: div.js-product-grid-wrap div:nth-child(4) div.product-name-grid');
        }
        const goodName = await element.evaluate(el => el.textContent);
        return goodName;
    }

    public async getFavoriteGoods(): Promise<void> {
        await this.favoriteGoods.click();
    }

    public async getFavoriteGoodsList(): Promise<string | null> {
        const element = await this.page.waitForSelector('div.product-name-grid'); // select the element
        if (!element) {
            throw new Error('Element not found: div.product-name-grid');
        }
        const goodList = await element.evaluate(el => el.textContent);
        return goodList;
    }

    public async removeFromFavoriteGoods(): Promise<void> {
        await this.removeFromFavorite.click();
        await this.confirmRemoveFromFav.wait();
    }
    public async confirmRemoveFromFavorite(): Promise<void> {
        await this.confirmRemoveFromFav.click();
    }

    public async getEmptyFavList(): Promise<string | null> {
        const element = await this.page.waitForSelector('div.empty-whish-list p:nth-child(1)'); // select the element
        if (!element) {
            throw new Error('Element not found: div.empty-whish-list p:nth-child(1)');
        }
        const emptyList = await element.evaluate(el => el.textContent);
        return emptyList;
    }

    public async getFavProductDetails(): Promise<void> {
        await this.favProductDetails.click();
        await this.removeGoodfromfav.wait();
    }

    public async removeGoodFromFav(): Promise<void> {
        await this.removeGoodfromfav.click();
    }
}
