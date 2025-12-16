class loginPage {
  acessarPaginaLogin() {
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
  }
  login(email, senha) {
    cy.get("#Email").clear().type(email);
    cy.get("#Password").clear().type(senha);
  }
  submit() {
    cy.get("button[type='submit']").click();
  }
  getDashboard() {
    return cy.get("h1:contains('Dashboard')");
  }

  loginInvalido(email, senha) {
    cy.get("#Email").clear().type(email);
    cy.get("#Password").clear().type(senha);
  }

  mensagemErroLogin() {
    return cy.get(".message-error");
  }

  mensagemEmailCurto() {
    return cy.get("#Email-error");
  }

  loginVazio(senha) {
    cy.get("#Email").clear();
    cy.get("#Password").clear().type(senha);
  }
}

export default loginPage;