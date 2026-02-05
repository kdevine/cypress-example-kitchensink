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

var locations = [{
  client: 'Southeast PCP - PSS',
  area: 'Preview',
  url: 'https://preview-southeastpcp-pss.keonahealth.com/'
}];
describe('Southeast PCP PSS Tests', () => {
  beforeEach(function() {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    var loginData = {}
    cy.fixture('auth').then(function (data) {
      this.data = data;
    });
    cy.visit(locations[0].url,{timeout:600000});
  });

  it(locations[0].client + ' ' + locations[0].area + ' PSS scheduling test', function() {
    cy.get('[name=txtPatientSearchNameLast]').type('ZZValidate');
    cy.get('[name=txtPatientSearchNameFirst]').type('test');
    cy.get('#txtPatientSearchDateOfBirth').type('04/12/1975');
    cy.get('[name=btnSelectPatientSearch]').click();
    cy.contains('ZZVALIDATE').click();
    cy.contains('Click here to continue with new encounter').click()
    cy.get('a').contains('Scheduling').first().click()
    cy.get('#survey_answer_1172234').check()
    cy.contains('Schedule an Appointment').click()
    cy.get('#react-select-5--value > .Select-placeholder', { timeout: 30000 }).click()
    cy.contains('CM Tops Fam Med').click()
    cy.get('#react-select-6--value > .Select-placeholder').type('Kelly')
    cy.contains('Kelly FNP, Nicole').click()
    cy.get('.col-sm-3 > .btn').click()
    cy.contains("Search").click()
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().click()
    cy.contains('Create Appointment(s)').click()
    cy.get('[name="btnSubmitTicketAfterScheduling"]',{timeout: 30000}).click()
    cy.get('#MainContent_MainContent_upOutcome > .col-sm-48 > .selectize-control > .selectize-input').scrollIntoView().click()
    cy.get('[data-value="79101660-5daa-ea11-9b05-501ac51c21ab"]',{force:true}).click();
    cy.get('#MainContent_MainContent_btnSaveWithoutNurseResponseCloseOnly',{timeout: 30000}).click()
  })
});