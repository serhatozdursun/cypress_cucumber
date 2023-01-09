Feature: Localization
  As a client I want to change language of the https://www.payflow.es/

  Scenario Outline: I should be able to change page language
    As the customer from different country

    Given '<Name>' is from '<Country>'
    When changes the page language
    Then Page should be display in expected language
    Examples:
      | Name     | Country  |
      | Alroy    | Colombia |
      | Martin   | España   |
      | Santiago | Portugal |
      | Carlos   | Perú     |
      | Marco    | Italia   |
      | Léa      | Francia  |