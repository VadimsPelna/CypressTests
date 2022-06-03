import {debug} from "util";
import {elementAt} from "rxjs";
import {white} from "ansi-colors";

beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));
})


it('Homework 1 Search Main news', () => {

    cy.get('#main-hot').find('.eg-front-page-featured-grid-element-1:visible').then((elem) => {
        cy.get('#nav-menu-item-search').click().within(()=>{
            cy.get('input').type(elem.text());
            cy.get('.search_title').should('have.text', elem.text()).click();
            cy.get('.article-title').should('have.text', elem.text());
        });
    })
})


it('Homework 2 Check count of dropdown', () => {
    let toolsDropdownCount = 14;

    cy.contains('Tools').closest('li').find('li').should('have.length', toolsDropdownCount).then((elements) => {
        elements
            .toArray()
            .map((el) => el.textContent)
            .forEach((t) => {
                console.log(t);
                // debugger;
            })
    });
})

it('Homework 3 Check count of dropdown', () => {
    let toolsDropdownCount = 14;

    cy.get('.dropdown-menu').find('li').should('have.length', toolsDropdownCount).then((elements) => {
        elements
            .toArray()
            .map((el) => el.textContent)
            .forEach((t) => {
                console.log(t);
                // debugger;
            })
    });
})

