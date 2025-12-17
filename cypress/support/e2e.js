Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para impedir que o Cypress falhe o teste
  return false
})

// Intercepta requisições de evento para o Backtrace e responde com 200
// para evitar aparecerem erros 401 nos logs dos testes
beforeEach(() => {
  cy.intercept('POST', 'https://events.backtrace.io/**', { statusCode: 200 })
})

// Import commands.js using ES2015 syntax:
import './commands'
