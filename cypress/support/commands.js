/* COMANDOS ABAIXO PARA SEREM EXECUTADOS COM O FILLMANDATORYFIELDSANDSUBMIT COM O FIRSTNAME: CHUMBADO 
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Cozzolino Calado')
    cy.get('#email').type('diegocalado8@gmail.com')
    cy.get('#open-text-area').type('Testando comandos customizados dentro da pasta CAC-TAT.cy.js, support arquivo commands.js.')
    cy.get('.button[type="submit"]').click()
})
*/ /* COMANDOS QUE PODEMOS MUDAR O, FIRTNAME, LASTNAME, EMAIL ETC.... COM O DATA  */
/* 
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('.button[type="submit"]').click()
}) */
    /* ESTES COMANDOS ABAIXO DEIXA COMO FIRSTNAME, LASTNAME E ETC, COMO PADRÃO, SE NÃO PASSAR O (DATA) */
    /* PARA ESTA CODIGO FUNCIONAR, E PRECISO IR EM CAC.TAT.CY, E APAGAR O CONST ATE O FECHAR COLCHETES} */
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@exemple.com',
    text: 'Test.'
}) =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    /* TEMOS ESTAS DUAS FORMAS DE CLICAR NO BUTTON COM O CONTAINS E COM O GET .CLICK */
    cy.contains('button', 'Enviar').click()
 /* cy.get('.button[type="submit"]').click()*/
})