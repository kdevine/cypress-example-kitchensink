/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown();
var locations = [{
  client: 'Corvallis Clinic',
  area: 'Preview',
  url: 'https://preview-corvallisclinic-pss.keonahealth.com'
}];

describe('Corvallis Clinic PSS Tests', function() {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.fixture('auth').then(function (data) {
      this.data = data;
    })
  });
 
  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - first page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.checkAccessibility();
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - filled first page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.checkAccessibility();
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - second page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.get('.continue-button').click();
    cy.get('.ui-test-survey-answer-radio-button-1784201-1812523 > label > .iradio_square > [name="survey_answer_radio_1784201"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784202-1812525 > label > .iradio_square > [name="survey_answer_radio_1784202"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784203-1812528 > label > .iradio_square > [name="survey_answer_radio_1784203"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784204-1812529 > label > .iradio_square > [name="survey_answer_radio_1784204"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784205-1812532 > label > .iradio_square > [name="survey_answer_radio_1784205"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784206-1812534 > label > .iradio_square > [name="survey_answer_radio_1784206"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784207-1812535 > label > .iradio_square > [name="survey_answer_radio_1784207"]').click();
    cy.get('[name="survey_answer_radio_1784212"]').click();
    cy.checkAccessibility();
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - provider page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.get('.continue-button').click();
    cy.get('.ui-test-survey-answer-radio-button-1784201-1812523 > label > .iradio_square > [name="survey_answer_radio_1784201"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784202-1812525 > label > .iradio_square > [name="survey_answer_radio_1784202"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784203-1812528 > label > .iradio_square > [name="survey_answer_radio_1784203"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784204-1812529 > label > .iradio_square > [name="survey_answer_radio_1784204"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784205-1812532 > label > .iradio_square > [name="survey_answer_radio_1784205"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784206-1812534 > label > .iradio_square > [name="survey_answer_radio_1784206"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784207-1812535 > label > .iradio_square > [name="survey_answer_radio_1784207"]').click();
    cy.get('[name="survey_answer_radio_1784212"]').click();
    cy.get('.launch-schedule-answer > .btn').click();
    cy.checkAccessibility();
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - facility page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.get('.continue-button').click();
    cy.get('.ui-test-survey-answer-radio-button-1784201-1812523 > label > .iradio_square > [name="survey_answer_radio_1784201"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784202-1812525 > label > .iradio_square > [name="survey_answer_radio_1784202"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784203-1812528 > label > .iradio_square > [name="survey_answer_radio_1784203"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784204-1812529 > label > .iradio_square > [name="survey_answer_radio_1784204"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784205-1812532 > label > .iradio_square > [name="survey_answer_radio_1784205"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784206-1812534 > label > .iradio_square > [name="survey_answer_radio_1784206"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784207-1812535 > label > .iradio_square > [name="survey_answer_radio_1784207"]').click();
    cy.get('[name="survey_answer_radio_1784212"]').click();
    cy.get('.launch-schedule-answer > .btn').click();
    cy.get('.provider-card-61221 > .provider-info > .provider-profile > .select-provider-button-container > .btn').click();
    cy.checkAccessibility();
    cy.get('.btn').click();
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().scrollIntoView().click();
    cy.checkAccessibility(null, { includedImpacts: [], onlyWarnImpacts: ['critical', 'serious', 'moderate', 'minor'] });
    cy.get('.create-appointment').click();
    cy.checkAccessibility(null, { includedImpacts: [], onlyWarnImpacts: ['critical', 'serious', 'moderate', 'minor'] });
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - scheduling page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.get('.continue-button').click();
    cy.get('.ui-test-survey-answer-radio-button-1784201-1812523 > label > .iradio_square > [name="survey_answer_radio_1784201"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784202-1812525 > label > .iradio_square > [name="survey_answer_radio_1784202"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784203-1812528 > label > .iradio_square > [name="survey_answer_radio_1784203"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784204-1812529 > label > .iradio_square > [name="survey_answer_radio_1784204"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784205-1812532 > label > .iradio_square > [name="survey_answer_radio_1784205"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784206-1812534 > label > .iradio_square > [name="survey_answer_radio_1784206"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784207-1812535 > label > .iradio_square > [name="survey_answer_radio_1784207"]').click();
    cy.get('[name="survey_answer_radio_1784212"]').click();
    cy.get('.launch-schedule-answer > .btn').click();
    cy.get('.provider-card-61221 > .provider-info > .provider-profile > .select-provider-button-container > .btn').click();
    cy.get('.btn').click();
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().scrollIntoView().click();
    cy.checkAccessibility();
    cy.get('.create-appointment').click();
    cy.checkAccessibility(null, { includedImpacts: [], onlyWarnImpacts: ['critical', 'serious', 'moderate', 'minor'] });
  })

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test - confirmation page a11y', function() {
    cy.visit(locations[0].url,{timeout:600000});
    cy.wait(1000);
    cy.get('[name="txtPatientNameFirst"]').type('ZZValidate');
    cy.get('[name="txtPatientNameLast"]').type('test');
    cy.get('[data-reactid=".1.3.1.1.0.2"] > .form-control').type('04/12/1975');
    cy.get('[data-reactid=".1.3.1.1.0.0"] > .form-control').type('554-555-5555');
    cy.get('[data-reactid=".1.3.1.3.0.0.2"] > label > .icon-circle-blank').click();
    cy.get('[data-reactid=".1.3.1.3.0.2.1"] > label > .icon-circle-blank').click();
    cy.get('.continue-button').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.1.0.2"]').click();
    cy.get('[data-reactid=".1.3.1.2.1.$l=28cf1a9df-9a57-4b97-9ecc-ae920174020a.2.$li=283e95e7b-72a4-4e35-b6a7-ae89015950d2.1.0.2"]').click();
    cy.get('.continue-button').click();
    cy.get('.ui-test-survey-answer-radio-button-1784201-1812523 > label > .iradio_square > [name="survey_answer_radio_1784201"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784202-1812525 > label > .iradio_square > [name="survey_answer_radio_1784202"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784203-1812528 > label > .iradio_square > [name="survey_answer_radio_1784203"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784204-1812529 > label > .iradio_square > [name="survey_answer_radio_1784204"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784205-1812532 > label > .iradio_square > [name="survey_answer_radio_1784205"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784206-1812534 > label > .iradio_square > [name="survey_answer_radio_1784206"]').click();
    cy.get('.ui-test-survey-answer-radio-button-1784207-1812535 > label > .iradio_square > [name="survey_answer_radio_1784207"]').click();
    cy.get('[name="survey_answer_radio_1784212"]').click();
    cy.get('.launch-schedule-answer > .btn').click();
    cy.get('.provider-card-61221 > .provider-info > .provider-profile > .select-provider-button-container > .btn').click();
    cy.get('.btn').click();
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().scrollIntoView().click();
    cy.get('.create-appointment').click();
    cy.checkAccessibility();
  })
});