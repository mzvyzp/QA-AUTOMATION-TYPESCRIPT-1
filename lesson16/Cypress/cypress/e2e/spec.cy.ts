describe ('Login to tehnomax', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit('https://www.tehnomax.me/');
    }
    );
    it('Login with valid credentials', () => {
        cy.get('div.user-wraper a').click();
        cy.get('div.login-wrapper input[placeholder="Email adresa *"]', { timeout: 4000 }).type('zvmykhailo@gmail.com');
        cy.get('div.login-wrapper input[type="password"]', { timeout: 4000 }).type('Zvmykhailo0206_');
        cy.get('div.login-wrapper input[value="PRIJAVITE SE"]').click();
        cy.wait(4000);
        cy.get('div.user-logged span').click();
        cy.get('div.account-menu-wrap h1.heading a').should('have.text', 'mzv mzv');
    });
    it('add goods to favorite', () => {
        cy.get('div.user-wraper a').click();
        cy.get('div.login-wrapper input[placeholder="Email adresa *"]', { timeout: 4000 }).type('zvmykhailo@gmail.com');
        cy.get('div.login-wrapper input[type="password"]', { timeout: 4000 }).type('Zvmykhailo0206_');
        cy.get('div.login-wrapper input[value="PRIJAVITE SE"]').click();
        cy.wait(4000);
        cy.get('[id="fnc-search_form"] input[type="text"]').type('usisivac dyson');
        cy.get('input[id="search_btn"]').click();
        cy.wait(2000);
        cy.get('div.js-product-grid-wrap div:nth-child(4) div.not-checked-wish').click();
        //let goodName: string;
        cy.get('div.js-product-grid-wrap div:nth-child(4) div.product-name-grid').invoke('text').then((text) => {
            const goodName = text.trim();
            cy.wait(2000);
            cy.get('div[class="wish-list-wrap js-wish-list-wrap"] a img', { timeout: 2000 }).click();
            cy.get('div.product-name-grid').should('contain', goodName);
            cy.get('a.product-link').click();
            cy.wait(4000);
            cy.get('div[class="relativediscount-mobile-align web-view"] div[class="checked-wish checked_wish_new"]').click();
            cy.get('div[class="wish-list-wrap js-wish-list-wrap"] a img', { timeout: 2000 }).click();
        });
        cy.get('div.empty-whish-list p:nth-child(1)').invoke('text').should('contain', 'Nemate proizvoda');
    });
});
