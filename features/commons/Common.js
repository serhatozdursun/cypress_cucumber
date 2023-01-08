import locators from '../resources/localization.json'

export function getLangOptionClass(language) {
    switch (language) {
        case 'Colombia':
            return getLocator("Colombia");
        case 'España':
            return getLocator("España");
        case 'Italia':
            return getLocator("Italia");
        case 'Portugal':
            return getLocator("Portugal");
        case 'Perú':
            return getLocator("Perú");
        case 'Francia':
            return getLocator("Francia");
    }
}

export function getCenturyCode(language) {

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

export function getLocator(locator_name) {
    let json = JSON.parse(JSON.stringify(locators));
    let type = Object.keys(json[locator_name])[0].toString()
    if (type === 'get') {
        return cy.get(json[locator_name].get)
    } else {
        return cy.contains(json[locator_name].contains)
    }
}


