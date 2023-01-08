import locators from '../resources/localization.json'

export function getLangOptionClass(language) {
    switch (language) {
        case 'Colombia':
            return getElement("Colombia");
        case 'España':
            return getElement("España");
        case 'Italia':
            return getElement("Italia");
        case 'Portugal':
            return getElement("Portugal");
        case 'Perú':
            return getElement("Perú");
        case 'Francia':
            return getElement("Francia");
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

export function getElement(locator_name) {
    let json = JSON.parse(JSON.stringify(locators));
    let type = Object.keys(json[locator_name])[0].toString()
    if (type === 'get') {
        return cy.get(json[locator_name].get)
    } else {
        return cy.contains(json[locator_name].contains)
    }
}
export function getElementValue(locator_name) {
    let json = JSON.parse(JSON.stringify(locators));
    let type = Object.keys(json[locator_name])[0].toString()
    if (type === 'get') {
        return json[locator_name].get
    } else {
        return json[locator_name].contains
    }
}

