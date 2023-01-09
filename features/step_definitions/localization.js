const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
const {getElement, get_country_option_elms, get_century_code} = require('../commons/common_methods');
const {create_customer, get_customer} = require('../commons/customer')

Given('{string} is from {string}', function (name, country) {
    create_customer(name, country);
});
When('changes the page language', function () {
    cy.visit(Cypress.config().baseUrl);
    getElement("localization_dropdown").click();
    get_country_option_elms(get_customer()['country']).first().click();

});
Then('Page should be display in expected language', function () {
    const languageDic = get_century_code(get_customer()['country']);
    if (get_customer()['country'] !== 'España') {
        const originUrl = 'https://' + languageDic['domain'];
        cy.origin(originUrl.toString(), {args: languageDic}, ({domain, lang}) => {
            cy.get("html").invoke('attr', 'lang')
                .should('eq', lang);
            cy.get("html").invoke('attr', 'data-wf-domain')
                .should('eq', domain);
        })
    } else {
        getElement('lang_info').invoke('attr', 'lang')
            .should('eq', languageDic['lang']);
        getElement('lang_info').invoke('attr', 'data-wf-domain')
            .should('eq', languageDic['domain']);
    }
});