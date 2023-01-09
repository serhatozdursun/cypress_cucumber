const {get_century_code} = require('../commons/common_methods');

let customer = undefined;


export function create_customer(name, country) {
    customer = {name: name, language: get_century_code(country)['lang'], country: country}
}

export function get_customer() {
    return customer;
}