
const LOGIN_BUTTON = "button[id = qsLoginBtn]";
const LANDINGPAGE_H1 = "h1[class =mb-4]";

before(function () {
  cy.fixture('setup')
  cy.fixture('setup').then(function (data) {
    this.data = data;
  })
})

class LandingPage {
  static visit() {
    cy.visit('');
  }

  static pressLogin() {
    cy.get(LOGIN_BUTTON).contains("Log In").click();
  }

  static verifyUserIsInLandingPage() {
    cy.get(LANDINGPAGE_H1).should("have.text", "Quality Stack");
  }
}
export default LandingPage;
