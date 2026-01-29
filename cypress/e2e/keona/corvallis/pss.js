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
    cy.visit(locations[0].url,{timeout:600000});
  });
  it.only(locations[0].client + ' ' + locations[0].area + ' scheduling test', function() {
    
  });
  
  it(locations[0].client + ' ' + locations[0].area + ' scheduling test', function() {
    cy.get('#btnProviderLogin').click();
    cy.get('#MainContent_liLogin_txtUserName').type(this.data.agentLogin);
    cy.get('#MainContent_liLogin_txtPassword').type(this.data.agentPassword);
    cy.get('#MainContent_liLogin_btnSignIn').click();
    cy.contains('New Encounter').click();
    cy.get('[name=txtPatientSearchNameLast]').type('test');
    cy.get('[name=txtPatientSearchNameFirst]').type('jordan');
    cy.get('[name=btnSelectPatientSearch]').click();
    cy.contains('Jordan').click();
    cy.contains('Click here to continue with new encounter').click();
    cy.contains('Continue').click();
    cy.get('input').get('[aria-label=Provider]').scrollIntoView().click({force: true});
    cy.contains('Mir Ali').click({force: true});
    cy.get('#react-select-3--value').scrollIntoView().click({force: true});
    cy.contains('GSOS Clinic Telehealth').click({force: true});
    cy.get('[data-reactid=".1.1.8.1.$key-ChiefComplaint.0.0.$0.1.0.0.2.0.1.0.$4.$0.1:$131291"] > .no-underline').click();
    //cy.get('a').contains('Scheduling').first().click()
    cy.get('#survey_answer_3035981').scrollIntoView().check();
    cy.get('#survey_answer_3035983').scrollIntoView().check();
    cy.get('#survey_answer_3035987').scrollIntoView().check();
    cy.get('#survey_answer_3036007').scrollIntoView().check();
    cy.get('#survey_answer_3036010').scrollIntoView().check();
    cy.get('#survey_answer_3809170').scrollIntoView().check();
    cy.get('#survey_answer_3036014').scrollIntoView().check();
    cy.get('#survey_answer_3036016').scrollIntoView().check();
    cy.get('#survey_answer_3036020').scrollIntoView().check();
    cy.get('#survey_answer_3036024').scrollIntoView().check();
    cy.get('#survey_answer_3886884').scrollIntoView().check();
    cy.get("#survey_answer_3943751").scrollIntoView().check();
    //cy.get('.ui-test-survey-answer-radio-button-3943751-4173904 > label > .iradio_square > [name="survey_answer_radio_3943751"]')

    cy.get('#survey_answer_3049284').scrollIntoView().check();
    cy.get('.Select-placeholder').scrollIntoView().type("PPO{enter}");
    cy.get('#survey_answer_3036108').type("Test");
    cy.get('#survey_answer_3036111').type("Test");
    cy.get('#survey_answer_3036113').type("Test");
    cy.get('#survey_answer_3036115').scrollIntoView().check();
    cy.get('#survey_answer_3036119').scrollIntoView().check();
    cy.get('#survey_answer_3036200').scrollIntoView().check();
    cy.get('#survey_answer_3106742').scrollIntoView().check();
    cy.get('#react-select-7--value > .Select-placeholder').scrollIntoView().click({force: true});
    cy.get('#react-select-7--option-2').click({force:true});
    cy.contains('Schedule an Appointment').scrollIntoView().click();
    cy.get('#react-select-14--value > .Select-placeholder', { timeout: 30000 }).scrollIntoView().click();
    cy.get('#react-select-14--value > .Select-placeholder', { timeout: 30000 }).type("Brentwood Clinic{enter}");
    cy.get('#react-select-15--value').scrollIntoView().type('Moorthy, Murali MD{enter}');
    cy.get('.col-sm-3 > .btn').scrollIntoView().click();
    cy.contains('Search').click();
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().scrollIntoView().click();
    cy.get('#PMReferringProviderId').scrollIntoView().click({force: true});
    cy.get('#PMReferringProviderId').scrollIntoView().type('Peter Abaci{enter}',{force:true});
    cy.contains('Create Appointment(s)').scrollIntoView().click();
    cy.get('[name=btnSaveAndCloseTicketAfterScheduling]',{timeout: 30000}).scrollIntoView().click();
    // Now reschedule
    cy.visit(locations[0].url + '/Providers/EncounterStart.aspx',{timeout:600000});
    cy.get('[name=txtPatientSearchNameLast]').scrollIntoView().type('test');
    cy.get('[name=txtPatientSearchNameFirst]').scrollIntoView().type('jordan');
    cy.get('[name=btnSelectPatientSearch]').scrollIntoView().click();
    cy.contains('Jordan').scrollIntoView().click();
    cy.contains('Continue').scrollIntoView().click();
    cy.contains('Click here to continue with new encounter').scrollIntoView().click();
    var cancelBtn = cy.contains('Cancel').scrollIntoView();
    console.log(cancelBtn);
    cancelBtn.click({force: true});
    cy.get('.pad-top-20 > .form-group > .Select > .Select-control > #react-select-2--value > .Select-value').scrollIntoView().select("Cancel Patient");
    cy.get('.col-md-48 > .form-control').scrollIntoView().type("Automated Test");
    cy.get('.btn-primary').scrollIntoView().click({force: true});
  })
});