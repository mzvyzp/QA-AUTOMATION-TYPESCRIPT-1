import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
//import * as fs from 'fs';

export class LoginPage extends Page {

    private get loginButton(): ChainablePromiseElement {
        return $('div.user-wraper a');
    }

    private get emailInput(): ChainablePromiseElement {
        return $('div.login-wrapper input[placeholder="Email adresa *"]');
    }

    private get passwordInput(): ChainablePromiseElement {
        return $('div.login-wrapper input[type="password"]');
    }

    private get submitButton(): ChainablePromiseElement {
        return $('div.login-wrapper input[value="PRIJAVITE SE"]');
    }

    public get userDetails(): ChainablePromiseElement {
        return $('div.user-logged span');
    }

    public userSelector = $('div.account-menu-wrap h1.heading a');

    /*public async goto(): Promise<void> {
        await this.open();
        await this.loginButton.waitForStable();
    }*/

    public async login(username: string, password: string): Promise<void> {


        await this.open();
        //await browser.setTimeout({ implicit: 1000 });
        await this.loginButton.waitForDisplayed();
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(username);
        await browser.setTimeout({ implicit: 4000 });
        await this.passwordInput.setValue(password);
        await browser.setTimeout({ implicit: 4000 });
        await this.submitButton.click();
        await this.userDetails.waitForDisplayed();
        await this.userDetails.waitForClickable();
        await this.userDetails.click();

    }
}

