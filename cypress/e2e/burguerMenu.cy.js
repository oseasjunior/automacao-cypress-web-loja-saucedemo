
import BurguerMenuPage from "./pages/burguerMenuPage";
import '../support/commands'; 
const burguerMenuPage = new BurguerMenuPage();

describe("testes menu Hamburguer", () => {
    beforeEach(() => {
        // Executa antes de cada teste
        cy.login();
    });

    afterEach(() => {
        // Executa após cada teste
        // limpar cookies, localStorage, etc.
        cy.clearCookies();
        cy.clearLocalStorage();
    });

        it("teste de exibição burguer menu", () => {
                burguerMenuPage.acessarBurguerMenu();
                burguerMenuPage.getBurguerMenu().should("be.visible");
            });
      

        it("teste de fechamento burguer menu", () => {
                burguerMenuPage.acessarBurguerMenu();
                burguerMenuPage.getBurguerMenu().should("be.visible");
                burguerMenuPage.fecharBurguerMenu();
                burguerMenuPage.getBurguerMenu().should("not.be.visible");
            }); 

        it("teste link About", () => {
                burguerMenuPage.acessarBurguerMenu();
                burguerMenuPage.validaLinkAbout();
            });

        it("teste link Logout", () => {
                burguerMenuPage.acessarBurguerMenu();
                burguerMenuPage.validaLinkAbout();
                burguerMenuPage.clickLogout();
                burguerMenuPage.validaUrlAposLogout();
                
            });
        });
