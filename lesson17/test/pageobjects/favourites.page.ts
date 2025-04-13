//import Page from './page';
import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { SearchPage } from './search-goods.page';

export class FavouritesPage extends SearchPage {

    private get favouriteGoods(): ChainablePromiseElement {
        return $('div[class="wish-list-wrap js-wish-list-wrap"] a img');
    }

    private get deleteButton(): ChainablePromiseElement {
        return $('form[class="wish-list-remove wish-list grid"]');
    }

    private get confirmRemoveFromFav(): ChainablePromiseElement {
        return $('div[data-remodal-id="modal"] button.remodal-confirm');
    }
    public emptyFavorites = $('ddiv.empty-whish-list p:nth-child(1)');

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
