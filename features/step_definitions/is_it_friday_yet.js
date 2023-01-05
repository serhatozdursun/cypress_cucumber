const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('Payflow home page with open country selection list box', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.log(' page is loaded')
    cy.get("#w-dropdown-toggle-2").click();
    cy.log('language button clicked')


});
When("Select the {string}", (language) => {
    cy.get(getLangOptionClass(language)).first().click();
});
Then("All page reload in {string} language", (language) => {
    const languageDic = getCenturyCode(language);
    if (language !== 'España') {
        const originUrl = 'https://' + languageDic['domain'];
        cy.origin(originUrl.toString(), {args: languageDic}, ({domain, lang}) => {
            cy.visit('/');
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

function getCenturyCode(language) {

    switch (language) {
        case 'Colombia':
            return {
                domain: "www.payflowapp.co",
                lang: "co"
            };
        case 'España':
            return {
                domain: "www.payflow.es",
                lang: "es"
            };
        case 'Portugal':
            return {
                domain: "www.payflowapp.pt",
                lang: "es"
            };
        case 'Italia':
            return {
                domain: "www.payflowapp.it",
                lang: "es"
            };
        case 'Perú':
            return {
                domain: "www.payflowapp.pe",
                lang: "co"
            };
        case 'Francia':
            return {
                domain: "www.payflowapp.fr",
                lang: "es"
            };
    }
}

function getLangOptionClass(language) {

    switch (language) {
        case 'Colombia':
            return ".colombialink";
        case 'España':
            return ".spainlink";
        case 'Portugal':
            return ".portugallink";
        case 'Italia':
            return ".italylink";
        case 'Perú':
            return ".perulink2";
        case 'Francia':
            return ".francelink";
    }
}