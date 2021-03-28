const USERNAME_TEXT = "input[name = email]";
const PASSWORD_TEXT = "input[name = password]";
const LOGIN_BUTTON = "button[type = submit]";

class LoginPage {
  static visit() {
    cy.visit("https://qualitystack-fbc6d.web.app");
  }

  static enterUsername() {
    cy.get(USERNAME_TEXT) // 2 seconds
      .type("test@gmail.com");
  }

  static enterPassword() {
    cy.get(PASSWORD_TEXT) // 2 seconds
      .type("Tester123");
  }

  static pressLogin() {
    cy.get(LOGIN_BUTTON).contains("Log In").click();
  }
}
export default LoginPage;
