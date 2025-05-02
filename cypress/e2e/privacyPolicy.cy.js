it('TESTA A PÁGINA DA POLÍTICA DE PRIVACIDADE DE FORMA INDEPENDENTE', () => {
    cy.visit('./src/privacy.html')

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    cy.contains('p', 'Talking About Testing').should('be.visible')
})

/* CRIAMOS UM SCRIPT "cy:open:mobile": "cypress open --config viewportWidth=410,viewportHeight=860", NA PASTA
SRC > packege.json, PARA SIMULAR UM TESTE NA VISÃO DE UM CELULAR, E PRECISO CRIAR ESTAS LINHAS DE COMANDO ACIMA, E CRIAR 
UM ARQUIVO: privacyPolicy.cy.js NA PASTA e2e. */  
