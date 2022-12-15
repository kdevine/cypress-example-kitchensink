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
  client: 'Golden State Ortho',
  area: 'Preview',
  url: 'https://preview-goldenstateortho.keonahealth.com'
}];
describe('Golden State Ortho Tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(locations[0].url);
  });
  it(locations[0].client + ' ' + locations[0].area + ' triage test', () => {
    cy.get('#btnProviderLogin').click();
    cy.get('#MainContent_liLogin_txtUserName').type('kagentsupport');
    cy.get('#MainContent_liLogin_txtPassword').type('crusw!9HOfin');
    cy.get('#MainContent_liLogin_btnSignIn').click();
    cy.contains('New Encounter').click();
    cy.get('[name=txtPatientSearchNameLast]').type('test');
    cy.get('[name=txtPatientSearchNameFirst]').type('jordan');
    cy.get('[name=btnSelectPatientSearch]').click();
    cy.contains('Jordan').click();
    cy.contains('Continue').click();
    cy.contains('Click here to continue with new encounter').click();
    cy.get('a').contains('Business Inquiry').click();
    cy.get('[name=survey_answer_1569390]').type('Automated Testing');
    cy.get('input').get('[aria-label=Provider]').scrollIntoView().click({
      force: true
    });
    cy.contains('Brooke Aber').click({
      force: true
    });
    cy.get('#react-select-3--value').scrollIntoView().click({
      force: true
    });
    cy.contains('Bone Health Clinic').click({
      force: true
    });
    cy.get('[name=btnSubmitTicket]').first().click();
    cy.get('#MainContent_MainContent_btnSaveWithoutNurseResponse', {
      timeout: 10000
    }).click();
    cy.get('#MainContent_MainContent_pnlProviderSelection > div').click();
    cy.contains('Contact Center').click({
      force: true
    });
    cy.get('#MainContent_MainContent_ddlSaveToChartEHRNotificationUrgencySelection').select('Low');
    cy.get('#MainContent_MainContent_btnCloseAndSaveToChart').click();
  });
  
  it(locations[0].client + ' ' + locations[0].area + ' scheduling test', () => {
    cy.get('#btnProviderLogin').click()
    cy.get('#MainContent_liLogin_txtUserName').type('kagentsupport')
    cy.get('#MainContent_liLogin_txtPassword').type('crusw!9HOfin')
    cy.get('#MainContent_liLogin_btnSignIn').click()
    cy.contains('New Encounter').click()
    cy.get('[name=txtPatientSearchNameLast]').type('test')
    cy.get('[name=txtPatientSearchNameFirst]').type('jordan')
    cy.get('[name=btnSelectPatientSearch]').click()
    cy.contains('Jordan').click()
    cy.contains('Continue').click()
    cy.contains('Click here to continue with new encounter').click()
    cy.get('input').get('[aria-label=Provider]').scrollIntoView().click({force: true})
    cy.contains('Brooke Aber').click({force: true})
    cy.get('#react-select-3--value').scrollIntoView().click({force: true})
    cy.contains('Bone Health Clinic').click({force: true})
    cy.get('a').contains('Scheduling').first().click()
    cy.get('#survey_answer_1990020').check()
    cy.get('#survey_answer_1990023').check()
    cy.get('#react-select-6--value').click()
    cy.contains('Aetna').click()
    cy.get('#survey_answer_1990064').check()
    cy.get('#survey_answer_1991880').check()
    cy.get('#survey_answer_1990077').check()
    cy.get('#survey_answer_1990094').check()
    cy.get('#survey_answer_1990148').check()
    cy.get('#survey_answer_1990150').check()
    cy.get('#react-select-7--value').scrollIntoView().click({force: true})
    cy.contains('Bilateral Ankle').click()
    cy.contains('Schedule an Appointment').click()
    cy.get('#react-select-14--value', { timeout: 30000 }).click()
    cy.contains('Brentwood Clinic').click()
    cy.get('#react-select-15--value').click()
    cy.contains('Moorthy, Murali MD').click()
    cy.get('div.col-sm-3.pad-left-5.marg-top-15.intelligent-scheduling-search-button > button').click()
    cy.get('div.col-sm-3.pad-left-5.marg-top-15.intelligent-scheduling-search-button').click()
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().click()
    cy.get('div.modal-body > div:nth-child(4) > div:nth-child(1) > div > div:nth-child(2) > input').type('Test')
    cy.get('div.modal-body > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(2) > input').type('Test')
    cy.get('#react-select-11--value').click()
    cy.contains('HMO Aetna').click()
    cy.get('#PMReferringProviderId').scrollIntoView().click({force: true})
    cy.contains('Peter Abaci').click()
    cy.contains('Create Appointment(s)').click()
    cy.get('[name=btnSaveAndCloseTicketAfterScheduling]').click()
    // Now reschedule
    cy.contains('New Encounter').click()
    cy.get('[name=txtPatientSearchNameLast]').type('test')
    cy.get('[name=txtPatientSearchNameFirst]').type('jordan')
    cy.get('[name=btnSelectPatientSearch]').click()
    cy.contains('Jordan').click()
    cy.contains('Continue').click()
    cy.contains('Click here to continue with new encounter').click()
    cy.get('input').get('[aria-label=Provider]').scrollIntoView().click({force: true})
    cy.contains('Brooke Aber').click({force: true})
    cy.get('#react-select-3--value').scrollIntoView().click({force: true})
    cy.contains('Bone Health Clinic').click({force: true})
  })
});