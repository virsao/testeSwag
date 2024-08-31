describe('Finalizar Compra', () => {
    it('finalizar a compra com sucesso', () => {
      // Acessa a página do carrinho
      cy.visit('https://saucedemo.com/v1/cart.html');

      // Seleciona  dois  produtos da lista
      cy.wait(2000).get('#item_1_title_link > .inventory_item_name').eq(0).find('.btn_inventory').click();
      cy.wait(2000).get('#item_0_title_link > .inventory_item_name').eq(1).find('.btn_inventory').click();
      
      // Clica no botão "CHECKOUT"
      cy.contains('CHECKOUT').click().wait (1000);
      cy.get('.btn_action');
        
      // Preenche os campos na página de checkout
      cy.visit('https://saucedemo.com/v1/checkout-step-one.html');
      cy.get('[data-test="firstName"]').type('Joao'); 
      cy.get('[data-test="lastName"]').type('Da Silva');
      cy.get('[data-test="postalCode"]').type('14100000');
      cy.get('.btn_primary').click();
  
      // Clicar no botão "FINISH"
      cy.get('.btn_action').click();
  
      // Verifica se a página de confirmação contém a mensagem de sucesso
      cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
    });
  });