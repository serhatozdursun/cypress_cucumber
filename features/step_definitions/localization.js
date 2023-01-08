const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
const {getLocator, getLangOptionClass, getCenturyCode} = require('../commons/Common');

Given('Payflow home page with open country selection list box', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.log(' page is loaded')
    let elm = getLocator("localization_dropdown")
    elm.click();
    cy.log('language button clicked')
});
When("Select the {string}", (language) => {
    getLangOptionClass(language).first().click();
});
Then("All page reload in {string} language", (language) => {
    const languageDic = getCenturyCode(language);
    if (language !== 'España') {
        const originUrl = 'https://' + languageDic['domain'];
        cy.origin(originUrl.toString(), {args: languageDic}, ({domain, lang}) => {
            cy.get("html").invoke('attr', 'lang')
                .should('eq', lang);
            cy.get("html").invoke('attr', 'data-wf-domain')
                .should('eq', domain);
        })
    } else {
        cy.get("html").invoke('attr', 'lang')
            .should('eq', languageDic['lang']);
        cy.get("html").invoke('attr', 'data-wf-domain')
            .should('eq', languageDic['domain']);
    }
});



