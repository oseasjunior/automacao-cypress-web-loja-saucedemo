class BurguerMenuPage {
    acessarBurguerMenu() {
        cy.get('#react-burger-menu-btn').click();
    }
    getBurguerMenu() {
        return cy.get('.bm-menu-wrap');
    }

    fecharBurguerMenu() {
        cy.get('#react-burger-cross-btn').click();
    }

    validaLinkAbout() {
        cy.get('#about_sidebar_link').should('be.visible');
    }

    clickLogout() {
        cy.get('#logout_sidebar_link').click();
    }

    validaLinkLogout() {
        cy.get('#logout_sidebar_link').should('be.visible');
    }

    validaUrlAposLogout() {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }


}

export default BurguerMenuPage;