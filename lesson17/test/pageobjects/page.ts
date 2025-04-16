import { browser } from '@wdio/globals';

export default class Page {
    public async open(): Promise<void> {
        await browser.url('https://www.tehnomax.me/');
    }
}
