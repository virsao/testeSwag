describe('Login Inválido', () => {
    it('login sem sucesso', () => {
      cy.visit('https://www.saucedemo.com/v1/');
  
      // página de login invalido
      cy.get('#user-name').type('admin');
      cy.get('#password').type('admin');
      cy.get('#login-button').click();
  
    });
  });