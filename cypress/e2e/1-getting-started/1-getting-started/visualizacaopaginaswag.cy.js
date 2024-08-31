describe('Login Válido', () => {
    it('login com sucesso', () => {
      cy.visit('https://www.saucedemo.com/v1/');
  
      // página de login valido
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // usuário redirecionado para a página de produtos
      cy.url().should('include', '/inventory');
      cy.contains('Products').should('be.visible');
    });
  });