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
describe('Golden State Ortho Tests', function() {
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
  it(locations[0].client + ' ' + locations[0].area + ' triage test', function() {
    cy.get('#btnProviderLogin').click();
    cy.get('#MainContent_liLogin_txtUserName').type(this.data.agentLogin);
    cy.get('#MainContent_liLogin_txtPassword').type(this.data.agentPassword);
    cy.get('#MainContent_liLogin_btnSignIn').click();
    cy.contains('New Encounter',{timeout:30000}).click();
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
    cy.contains('Mir Ali').click({
      force: true
    });
    cy.get('#react-select-3--value').scrollIntoView().click({
      force: true
    });
    cy.contains('GSOS Clinic Telehealth').click({
      force: true
    });
    cy.get('[name=btnSubmitTicket]', { timeout: 30000 }).first().click();
    cy.get('#MainContent_MainContent_btnSaveWithoutNurseResponse', {
      timeout: 30000
    }).click();
    cy.get('#MainContent_MainContent_pnlProviderSelection > div', {timeout:30000}).click();
    cy.contains('Contact Center').click({
      force: true
    });
    cy.get('#MainContent_MainContent_ddlSaveToChartEHRNotificationUrgencySelection').select('Low');
    cy.get('#MainContent_MainContent_btnCloseAndSaveToChart').click();
  });
  
  it(locations[0].client + ' ' + locations[0].area + ' scheduling test', function() {
    cy.get('#btnProviderLogin').click()
    cy.get('#MainContent_liLogin_txtUserName').type(this.data.agentLogin)
    cy.get('#MainContent_liLogin_txtPassword').type(this.data.agentPassword)
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
    cy.get('#survey_answer_1990020').scrollIntoView().check()
    cy.get('#survey_answer_1990023').scrollIntoView().check()
    cy.get('.Select-placeholder').scrollIntoView().type("PPO{enter}")
    cy.get('#survey_answer_1990061').type("Test")
    cy.get('#survey_answer_1990067').type("Test")
    cy.get('#survey_answer_1990062').type("Test")
    cy.get('#survey_answer_1990063').scrollIntoView().check()
    cy.get('#survey_answer_1991880').scrollIntoView().check()
    cy.get('#survey_answer_1990077').scrollIntoView().check()
    cy.get('#survey_answer_1990094').scrollIntoView().check()
    cy.get('#survey_answer_2039435').scrollIntoView().check()
    cy.get('#react-select-7--value > .Select-placeholder').scrollIntoView().click({force: true})
    cy.get('#react-select-7--option-2').click({force:true});
    cy.contains('Schedule an Appointment').scrollIntoView().click()
    cy.get('#react-select-14--value > .Select-placeholder', { timeout: 30000 }).scrollIntoView().click()
    cy.get('#react-select-14--value > .Select-placeholder', { timeout: 30000 }).type("Brentwood Clinic{enter}")
    cy.get('#react-select-15--value').scrollIntoView().type('Moorthy, Murali MD{enter}')
    cy.get('.col-sm-3 > .btn').scrollIntoView().click()
    cy.contains('Search').click()
    cy.get('.appointment-slot-list-card', { timeout: 30000 }).first().scrollIntoView().click()
    cy.get('#PMReferringProviderId').scrollIntoView().click({force: true})
    cy.get('#PMReferringProviderId').scrollIntoView().type('Peter Abaci{enter}',{force:true})
    cy.contains('Create Appointment(s)').scrollIntoView().click()
    cy.get('[name=btnSaveAndCloseTicketAfterScheduling]',{timeout: 30000}).scrollIntoView().click()
    // Now reschedule
    cy.visit(locations[0].url + '/Providers/EncounterStart.aspx',{timeout:600000});
    cy.get('[name=txtPatientSearchNameLast]').scrollIntoView().type('test')
    cy.get('[name=txtPatientSearchNameFirst]').scrollIntoView().type('jordan')
    cy.get('[name=btnSelectPatientSearch]').scrollIntoView().click()
    cy.contains('Jordan').scrollIntoView().click()
    cy.contains('Continue').scrollIntoView().click()
    cy.contains('Click here to continue with new encounter').scrollIntoView().click()
    cy.get('input').get('[aria-label=Provider]').scrollIntoView().click({force: true})
    cy.contains('Brooke Aber').scrollIntoView().click({force: true})
    cy.get('#react-select-3--value').scrollIntoView().click({force: true})
    cy.contains('Bone Health Clinic').scrollIntoView().click({force: true})
    var cancelBtn = cy.contains('Cancel').scrollIntoView();
    console.log(cancelBtn);
    cancelBtn.click({force: true});
    cy.get('.pad-top-20 > .form-group > .Select > .Select-control > #react-select-2--value > .Select-value').scrollIntoView().select("Cancel Patient");
    cy.get('.col-md-48 > .form-control').scrollIntoView().type("Automated Test");
    cy.get('.btn-primary').scrollIntoView().click({force: true});
  })
});