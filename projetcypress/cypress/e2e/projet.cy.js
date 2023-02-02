/// <reference types="cypress" />

beforeEach(() => {
	cy.visit("https://magento.softwaretestingboard.com/");
});

describe("automatisation d'un test", () => {
	it("insciption", () => {
		cy.get(".panel > .header > :nth-child(3) > a").click();
		cy.get("#firstname").type("toto");
		cy.get("#lastname").type("tata");
		cy.get("#email_address").type("d.vakdorrrr33@yopmail.com");
		cy.get("#password").type("Paklpatine122");
		cy.get("#password-confirmation").type("Paklpatine122");
		cy.get(
			"#form-validate > .actions-toolbar > div.primary > .action > span"
		).click();
	});
	it("conexion1", () => {
		cy.get(".panel > .header > .authorization-link > a").click();
		cy.get("#email").type("d.vador@yopmail.com");
		cy.get(
			".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
		).type("Palpatine666");
		cy.get(
			".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
		).click();
	});

	it("addtocart1", () => {
		cy.get("#ui-id-4").trigger("mouseover");
		cy.get("#ui-id-9").trigger("mouseover");
		cy.get("#ui-id-11 > span").click();
		cy.get(".wrapper > .products > :nth-child(1)").trigger("mouseover");
		cy.get(
			".swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-167"
		).click();
		cy.get(
			".swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49"
		).click();
		cy.get('[class="action tocart primary"]').first().click({ force: true });
		cy.wait(3000);
		cy.get(".showcart").click();
		cy.wait(3000);
		cy.get("#top-cart-btn-checkout").click();
		cy.get("#customer-email-fieldset > .required").type(
			"darkvador@yopmail.com"
		);
		cy.get('[name="shippingAddress.firstname"]').type("street of tarkov");
		cy.get('[name="shippingAddress.lastname"]').type("tarkov");
		cy.get('[name="shippingAddress.company"]').type("wild");
		cy.get('[name="shippingAddress.street.0"]').type("1 rue de lille");
		cy.get('[name="shippingAddress.city"]').type("Lille");
		cy.get('[class="select"]').eq(0).select("Alaska");
		cy.get('[name="shippingAddress.postcode"]').type("59000");
		cy.get('[class="select"]').eq(1).select("France");
		cy.get('[name="shippingAddress.telephone"]').type("0320123456");
		cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
		cy.get(".button").click();
		cy.get("#billing-address-same-as-shipping-checkmo").click();
		cy.get(
			".payment-method-content > :nth-child(4) > div.primary > .action"
		).click();
	});
	it("modifier quantite panier", () => {
		cy.get("#ui-id-4").trigger("mouseover");
		cy.get("#ui-id-9").trigger("mouseover");
		cy.get("#ui-id-11 > span").click();
		cy.get(".wrapper > .products > :nth-child(1)").trigger("mouseover");
		cy.get(
			".swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-167"
		).click();
		cy.get(
			".swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49"
		).click();
		cy.get('[class="action tocart primary"]').first().click({ force: true });
		cy.wait(2000);
		cy.get(".showcart").click();
		cy.wait(2000);
		cy.get(":nth-child(7) > .secondary > .action > span").click();

		cy.get('input[class="input-text qty"]').clear().type("20");
		cy.get(".update > span").click();
		cy.wait(1000);
		cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();
		cy.get("#customer-email-fieldset > .required").type("darkvador@yopmail.com");
		cy.get('[name="shippingAddress.firstname"]').type("street of tarkov");
		cy.get('[name="shippingAddress.lastname"]').type("tarkov");
		cy.get('[name="shippingAddress.company"]').type("wild");
		cy.get('[name="shippingAddress.street.0"]').type("1 rue de lille");
		cy.get('[name="shippingAddress.city"]').type("Lille");
		cy.get('[class="select"]').eq(0).select("Alaska");
		cy.get('[name="shippingAddress.postcode"]').type("59000");
		cy.get('[class="select"]').eq(1).select("France");
		cy.get('[name="shippingAddress.telephone"]').type("0320123456");
		cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
		cy.get(".button").click();
		cy.get("#billing-address-same-as-shipping-checkmo").click();
		cy.get(
			".payment-method-content > :nth-child(4) > div.primary > .action"
		).click();
	});
});