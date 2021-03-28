const LOGOUT_BUTTON = "button[id = qsLogoutBtn]";
const HOMEPAGE_H1 = "h1[class = mb-4]";

class HomePage {
  static pressLogout() {
    cy.get(LOGOUT_BUTTON).contains("Log Out").click();
  }

  static verifyUserIsInHomePage()
  {
    cy.get(HOMEPAGE_H1).should('have.text','Welcome to Quality Stack');
  }
}
export default HomePage;
