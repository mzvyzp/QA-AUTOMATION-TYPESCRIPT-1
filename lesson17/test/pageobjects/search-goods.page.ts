import Page from './page';
import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class SearchPage extends Page {
    private get searchGoods(): ChainablePromiseElement {
        return $('[id="fnc-search_form"] input[type="text"]');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('input[id="search_btn"]');
    }
    private get addToFavorite(): ChainablePromiseElement {
        return $('div.js-product-grid-wrap div:nth-child(4) div.not-checked-wish');
    }

    public async searchForGoods(good: string): Promise<void> {
        await this.searchGoods.setValue(good);
        await this.searchButton.click();
        await this.addToFavorite.click();
    }
}
