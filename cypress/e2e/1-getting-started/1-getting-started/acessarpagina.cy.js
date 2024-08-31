///<reference types="cypress"/>
///visitando a pagina para pegar o nome
describe ('cypress basics', () =>{
    it('visitar pagina sauce demo',() => {
        cy.visit ('https://saucedemo.com/v1/')

cy.title().should('be.equal', 'Swag Labs')

    })
})