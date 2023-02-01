/// <reference types="cypress" />

describe("automatisation d'un terst", () => {
   
   // it.skip("insciption", () => {
       // cy.visit("https://magento.softwaretestingboard.com/");
       // cy.get('.panel > .header > :nth-child(3) > a').click();
       // cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click();
       // cy.get('#firstname').type('dark');
        //cy.get('#lastname').type('vador');
       // cy.get('#email_address').type('darkvador@yopmail.com');
       // cy.get('#password').type('Palpatine666');
       // cy.get('#password-confirmation').type('Palpatine666');
       // cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
   // })

    //it.skip("conexion", () => {
   //     cy.visit("https://magento.softwaretestingboard.com/");
    //    cy.get('.panel > .header > .authorization-link > a').click();
    //    cy.get('#email').type('darkvador@yopmail.com');
    //    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Palpatine666");
   //     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    //})

    //afterEach("clear panier", () => {
    //    cy.clearCookies();
   // });

    it("addtocart", () => {

        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('.panel > .header > .authorization-link > a').click();
        cy.get('#email').type('darkvador@yopmail.com');
        cy.get('#pass').type("Messi999");
        cy.get('#send2').click();
        cy.get('#ui-id-4').click();
        cy.get('dd > .items > :nth-child(1) > a').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-57').click();
        cy.get('button[type="submit"]').should('be.visible');
        cy.get('[class="action tocart primary"]').eq(0).click({force: true});
        cy.get('.showcart').click();
        cy.get('[class="action primary checkout"] ').click();
        cy.get('.street').type('street of tarkov');
        cy.get('[name="shippingAddress.city"]').type('tarkov');
        cy.get('[name="shippingAddress.region_id"]').select('france')
        cy.get('[name="shippingAddress.postcode"]').type('06510');
        //choix pays
        cy.get('[name="shippingAddress.telephone"]').type('+33320549163');
        cy.get(':nth-child(2) > :nth-child(1) > .radio').click();
        cy.get('.button').click();
        

    })
    
})