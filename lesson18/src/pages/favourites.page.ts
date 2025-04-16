//import Page from './page';
import { BrowserContext, Locator, Page } from '@playwright/test';
//import * as fs from 'fs';
import { SearchPage } from './search-goods.page';

export class FavouritesPage extends SearchPage {

    private get favouriteGoods(): Locator {
        return this.page.locator('div[class="wish-list-wrap js-wish-list-wrap"] a img');
    }

    private get deleteButton(): Locator {
        return this.page.locator('form[class="wish-list-remove wish-list grid"]');
    }

    private get confirmRemoveFromFav(): Locator {
        return this.page.locator('div[data-remodal-id="modal"] button.remodal-confirm');
    }
    public emptyFavorites = this.page.locator('div.empty-whish-list p:nth-child(1)');

    public constructor(private page: Page, private context: BrowserContext) {
        super();
    }

    public async goToFavourites(): Promise<void> {
        await this.favouriteGoods.waitForDisplayed();
        await this.favouriteGoods.waitForClickable();
        await this.favouriteGoods.click();
    }

    public async deleteFromFavourites(): Promise<void> {
        await this.deleteButton.waitForDisplayed();
        await this.deleteButton.click();
        await this.confirmRemoveFromFav.waitForDisplayed();
        await this.confirmRemoveFromFav.waitForClickable();
        await this.confirmRemoveFromFav.click();
    }

}
