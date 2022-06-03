import {debug} from "util";
import {elementAt} from "rxjs";
import {white} from "ansi-colors";

beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));
})

/*
it('Test multiple elements 1', () => {
    cy.get('#menu-main-menu li').first().should('have.text', 'Home');

    cy.get('#menu-main-menu').find('li').first().then((dd) => {
        const text = dd.text();
        debugger;
        expect(text).to.match(/Home/)
        expect(text).to.include('Home')
    });

    const expectedArray = ["Confluence", "Jira", "MyCTCo", "Task ODS", "Mail"]
    debugger;
    cy.contains('Tools').closest('li').find('li').should('have.length', 14);
    debugger;
    // cy.contains('Tools').closest('li').find('li').should('have.length', 10);
    // debugger;

    cy.contains('Tools').closest('li').find('li').should('have.length', 10).then((elements) => {
        elements
            .toArray()
            .map((el) => el.textContent)
            .forEach((t, i) => {
                debugger;
                expect(t).to.eq(expectedArray[i])
            })
    });
})

it('Test multiple elements 2', () => {
    cy.contains('Billboard').click();

    cy.get('.products li mark').each((element, index, $list) => {
        //how to debug elements? debugger is not working here.
        debugger;
        cy.get('.products li mark').eq(index).click();
        cy.go('back');
    });
})

it('Test multiple elements 3', () => {
    cy.get('#menu-main-menu li').contains('Billboard').click();
    const expectedArray = ["Electronics", "Food", "Other", "Real estate", "Transport"]

    let i = 0;
    while (i < expectedArray.length) {
        cy.contains(expectedArray[i]).click();
        cy.go('back');
        i++;
    }
})



 */

it('Homework 1 Search Main news', () => {
    // let toolsDropdownCount = 14;

    cy.get('#main-hot').find('.eg-front-page-featured-grid-element-1:visible').then((elem) => {
        cy.get('#nav-menu-item-search').click().within(()=>{
            // cy.get('input').type(elem.text());
            cy.get('#ajax_searchform').type(elem.text());
            debugger;

            cy.get('search_title').should('have.text', elem.text()).click();
            // cy.get(".search-trigger").click();
            // cy.get('#ajax_searchform').type(elem.text());
        });
        // cy.get(".search-trigger").click();

        // cy.get('#ajax_searchform').type(elem.text());
        // cy.get('.search_title').should('have.text', elem.text());


        // cy.assertSearchResultHasText(elem.text()).click();
        // cy.assertArticleHasTitle(elem.text());
    })

    // cy.get('ul li:first').should('have.class', 'mainul');
    // let newText1 = cy.get('#main-hot li').find('eg-front-page-featured-grid-element-1:visible').then( (elem)=>{
    //
    // })
    //     .should('have.class','eg-front-page-featured-grid-element-1');
    // debugger;

    // let textToSearch = newText1.contains("a");



    // eg-front-page-featured-grid-element-1 eg-post-162788
    // debugger;

    // let newText = cy.get('#main-hot li').find('a');
    // debugger;

    // cy.contains('Tools').closest('li').find('li').should('have.length', toolsDropdownCount).then((elements) => {
    //     elements
    //         .toArray()
    //         .map((el) => el.textContent)
    //         .forEach((t) => {
    //             console.log(t);
    //             // debugger;
    //         })
    // });
})

/*
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

 */
