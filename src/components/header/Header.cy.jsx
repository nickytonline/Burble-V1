import React from "react";
import Header from "./Header";

describe("Header", () => {
	beforeEach(() => {
		cy.mount(<Header></Header>);
	});

	it("should render the header ", () => {
		cy.get("header").should("not.have.class", "header");
	});

	it('should add the "shrink" class to the header on scroll', () => {
		cy.get(".header").should("not.have.class", "shrink");
		cy.get("body").scrollTo("top");
		cy.get(".header").should("have.class", "shrink");
	});
});

// it('renders', () => {
//   cy.get('.header').should('have.class', 'header');
// });

//   it('should render the logo', () => {
//     cy.get('.header .logo img').should('have.attr', 'src', 'BurbleLogo.png');
//     cy.get('.header .logo a').should('have.text', 'Burble');
//   });

//   it('should render the navigation links', () => {
//     cy.get('.header__nav li').should('have.length', 4);
//     cy.get('.header__nav li').first().should('have.text', 'Home');
//     cy.get('.header__nav li').eq(1).should('have.text', 'Movies');
//     cy.get('.header__nav li').eq(2).should('have.text', 'TV Series');
//   });

// it('should add the "shrink" class to the header on scroll', () => {
//   cy.get('.header').should('not.have.class', 'shrink');
//   cy.get('body').scrollTo('top');
//   cy.get('.header').should('have.class', 'shrink');
// });
// });

// Test conditions
// Header
// - has all expected links.
// - they are real links with <a> tags.
// - should have a logo image with alt text.
