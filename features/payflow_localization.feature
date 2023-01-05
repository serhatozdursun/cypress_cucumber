Feature: Localization
  As a client I want to change language of the https://www.payflow.es/

  Scenario Outline: select Different languages
    Given  Payflow home page with open country selection list box
    When Select the '<language>'
    Then All page reload in '<language>' language
    Examples:
      | language |
      | Colombia |
      | España   |
      | Portugal |
      | Perú     |
      | Italia   |
      | Francia  |
