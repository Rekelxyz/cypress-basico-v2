Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Sieg')
    cy.get('#lastName').type('Wahrheit')
    cy.get('#email').type('chaoslegion@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})