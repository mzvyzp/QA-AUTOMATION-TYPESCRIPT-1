import { browser } from '@wdio/globals';
//import { ChainablePromiseElement } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(): Promise<void> {
        await browser.url('https://www.tehnomax.me/');
    }
}
