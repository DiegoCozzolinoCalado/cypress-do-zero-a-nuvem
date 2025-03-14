describe('Central de Atendimento ao Cliente TAT', () => {
  /* Antes do teste ser executado ele fara um beforeeach, para confirmar, ai não precisa ficar repitindo ao longo de cada teste. */
  beforeEach(() => {
    cy.visit('./src/index.html')    
  });
  it('verifica o título da aplicação', () => {
    /* cy.visit e para visitar a pagina, no nosso caso estamos visantado uma pagina local, no meu pc. */
    
    /* cy.title estamos buscando o titulo da aplicação para verificar se ele e correto */
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

    /* aqui colocamos os comandos para preencher o formulário */
  it('preencher os campos obrigatórios e enviar o formulário', () => {
    /* este comando const LongTsxt._.repeat e para repetir o texto que e digitado quantas vezes vc desejar, colocando virgula 10.*/
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwyxz', 10)

    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Cozzolino Calado')
    cy.get('#email').type('diegocalado8@gmail.com')
    cy.get('#phone').type('11 952467530')
  /* Este comando {delay: 0} e para diminuir o tempo da execução do texte, ele da um ctrl + c , ctrl + v */
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('.button[type="submit"]').click()
    
    cy.get('.success').should('be.visible')

  })
    
    /* SIMULANDO E-MAIL INVALIDO, COM A MSG DE ERROR.. */
    it ('exibe mensagem de erro ao submeter o formulário com um e-mail com formatação inválida', () => {
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Cozzolino Calado')
    cy.get('#email').type('diegocalado8@gmail,com')
    cy.get('#phone').type('11 952467530')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    /* para verificar a msg, se esta aparecendo, quando e digitado e-mail incorretos. */
    cy.get('.error').should('be.visible')

  })

      /* SIMULANDO ERRO AO DIGITAR NUEMRO DE TELEFONE INCORRETO  */
    it ('CAMPO TELEFONE CONTINUA VAZIO QUANDO PREENCHIDO COM UM VALOR NÃO-NUMÉRICO', () => {
    cy.get('#phone')
      .type('abcdef')
    /* para verificar a msg, se esta aparecendo, quando e digitado n° de telefone incorretos. */
      .should('have.value', '')
  })

    it('EXIBE MSG DE ERRO QUANDO O TELEFONE SE TORNA OBRIGATORIO MAS NÃO É PREENCHIDO ANTES DO ENVIO DO FORMULÁRIO', () => {
      cy.get('#firstName').type('Diego')
      cy.get('#lastName').type('Cozzolino Calado')
      cy.get('#email').type('diegocalado8@gmailcom')
      cy.get('#open-text-area').type('Teste')
      cy.get('#phone-checkbox').check()  /* .CLICK ANTES / COM O .CHECK E DA PARA MARCAR NA FLAG DO TELEFONE O .CHECK, SO MARCA E O UNCHECK SO DESMARCA */
      cy.get('button[type="submit"]').click()

      /* VERIFICA O ERRO NA MSG, QUE MARCAMOS O CHECKBOX, MAS NÃO PREENCHEMOS COM O NUMERO DO TELEFONE */
      cy.get('.error').should('be.visible')

    })
      /* APRENDENDENDO O COMANDO CLEAR COM OS COMANDOS ABAIXO */
    it('PREENCHE E LIMPA OS CAMPOS NOME, SOBRENOME, E-MAIL E TELEFONE', () => {
      cy.get('#firstName')
        .type('Diego')
        .should('have.value', 'Diego')  /* VERIFICA SE O NOME ESTA LA. */
        .clear()
        .should('have.value', '')

      cy.get('#lastName')  /* FAZENDO A VERIFICAÇÃO NO LASTNAME */
        .type('Cozzolino Calado')
        .should('have.value', 'Cozzolino Calado')  /* VERIFICA SE O NOME ESTA LA. */
        .clear()
        .should('have.value', '')

      cy.get('#email')    /* FAZENDO A VERIFICAÇÃO NO E-MAIL */
        .type('diegocalado8@gmail.com')
        .should('have.value', 'diegocalado8@gmail.com')  /* VERIFICA SE O NOME ESTA LA. */
        .clear()
        .should('have.value', '')  


      cy.get('#phone')    /* FAZENDO A VERIFICAÇÃO NO TELEFONE */
        .type('11952467530')
        .should('have.value', '11952467530')  /* VERIFICA SE O NUMERO ESTA LA. */
        .clear()
        .should('have.value', '')
    })

    it('EXIBE MSG DE ERRO AO SUBMETER O FORMULÁRIO SEM PREENCHER OS CAMPOS OBRIGATÓRIOS', () => {
      /* cy.get('button[type="submit"]').click()  /* AÇÃO, CLICA NO BOTÃO PARA VER A MSG DE ERRO.  */
      
      /* ESTE COMANDO ABAIXO, E PARA APRENDER O COMANDO CONTAINS, QUE PEGA UMA LETRA OU PALAVRA  */
      cy.contains('button', 'Enviar').click()

      cy.get('.error').should('be.visible')  /* RESULTADO, MOSTRA A MSG DE ERRO, VALIDA */
    } )

    it('ENVIA O FORMULÁRIO COM SUCESSO USANDO UM COMANDO CUSTOMISADO', () => {
      /* PARA QUE O TESTE COM O FIRSTNAME, LASTNAME , ETC FUNCIONAE O PADRA, E PRECISO APAGAR O CONST ATE O COLCHETES } */
      const data = {
        firstName: 'Diogo',
        lastName: 'Calado',
        email: 'diogocalado7@gmail.com',
        text: 'Teste, 2'
      }
        /* AQUI APAGA O (DATA) PARA QUE O PADRÃO COM O FIRSTNAME JOHN FUNCIONE... */
      cy.fillMandatoryFieldsAndSubmit(data)

      cy.get('.success').should('be.visible')

    })
      /* AQUI TEMOS TRES OPÇÕES DE SELECIONAR NO PRODUCT , POR INDICE, POR TEXTO E POR VALUE */
    it('SELECIONA UM PRODUTO (YOUTUBE) POR SEU TEXTO', () => {
      cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })

    it('CRIE UM NOVO TESTE CHAMADO SELECIONA UM PRODUTO (MENTORIA) POR SEU VALOR (VALUE)', () => {
      cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })
      /* ATENÇÃO QUANDO FOR NO INDICE, FICAR ATENTO AO SELECIONAR O NUMERO DESEJADO CORRETO, AQUI O ZERO CONTA. */
    it('CRIAR UM NOVO TESTE CHAMADO SELECIONA UM PRODUTO (BLOG) POR SEU ÍNDICE', () => {
      cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })
    
    it('CRIAR UM TESTE CHAMADO MARCA O TIPO DE ATENDIMENTO "FEEDBACK" ', () => {
      cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('be.checked')
    })
    /* ESTE COMANDO VERIFICA OS TRES ITENS DENTRO DO TIPO DE ATENDIMENTO, VERIFICANDO SE OS TRES ESTÃO OK. */
    /* CONHECENDO OS COMANDOS .EACH E WRAP , EACH SELECIONA, O WRAP EMPACOTA */
    it('CRIAR UM TESTE CHAMADO MARCA CADA TIPO DE ATENDIMENTO', () => {
      cy.get('input[type="radio"]')
        .each(typeOfService => {
          cy.wrap(typeOfService)
            .check()
            .should('be.checked')
        })
    })
      /* VERIFICANDO OSCHECKBOX, DO EMAIL E TELEFONE, EM QUAL O SEU MEIO DE CONTATO PREFERENCIAL */
    it('MARCAR AMBOS CHECKBOXES, DEPOIS DESMARCAR O ÚLTIMO', () => {
        /* O CY.GET, RETORNA UM OU MAIS ELEMENTOS */
      cy.get('input[type="checkbox"]')
        /* O CHECK MARCA UM OU MAIS ELEMENTOS */
        .check()
          /* O SHOULD VERIFICA SE TODOS ESTÃO MARCADOS  */
        .should('be.checked')
         /* O LAST PEGA O ULTIMO QUE ESTA MARCADO */
        .last()
          /* O UNCHECK DESMARCA O CHECK */
        .uncheck()
          /* ESTE SHOULD VERIFICA SE ESTA REALMENTE DESMARCADO */
        .should('not.be.checked')
    })
    
    it.only('SELECIONA UM ARQUIVO DA PASTA LIXTURES', () => {
      cy.get('#file-upload')
        .selectFile('cypress/fixtures/example.json')  /* NO SELECTFILE, E PRECISO IR NA PASTA AO LADO, E PROCURAR POR FIXTURES DEPOIS CLICAR COM O DIREITO EM EXEMPLE.JSON E SELECIONAR COPY RELATIVE PATH */
          .should(input => { 
            expect(input[0].file[0].name).to.equal('example.json')

        })
    })
})
 
