import loginPage from "../e2e/pages/loginPage";
Cypress.Commands.add('login', () => {
loginPage.acessarPaginaLogin();
loginPage.login('standard_user', 'secret_sauce');
loginPage.submit();

});


