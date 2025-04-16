import Page from './page';
import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class ProductDetailPage extends Page {
    private get productDetails(): ChainablePromiseElement {
        return $('a.product-link');
    }

    private get removeFromFav(): ChainablePromiseElement {
        return $('a[class="js-wish-list checked_wish  product-details-wish-wrap"]');
    }

    //public goodName = $('div[class="relativediscount-mobile-align web-view"] h1.product-details-title');

    public async goodDetails(): Promise<void> {
        await this.productDetails.click();
        //await this.removeFromFav.waitForDisplayed();
        //await this.removeFromFav.click();
    }

    public async removeFromFavourites(): Promise<void> {
        await this.removeFromFav.waitForDisplayed();
        await this.removeFromFav.waitForClickable();
        await this.removeFromFav.click();
    }
}
