//describe('Adicionar Produtos ao Carrinho', () => {
 //   it('adicionar dois  produtos ao carrinho', () => {
 //     cy.visit('https://www.saucedemo.com/v1/inventory.html');
  
      // Localizar os botões de adicionar ao carrinho dos dois produtos
 //     cy.get('.btn_inventory').eq(0).click();
 //     cy.get('.btn_inventory').eq(1).click();
  
      // Verifique se o ícone do carrinho foi atualizado
 //     cy.get('.shopping_cart_badge').should('have.text', '2');
 //   });
 // });

 describe('Adicionar Produtos ao Carrinho', () => {
    it('adiciona dois produtos ao carrinho e verifica o ícone do carrinho', () => {
      cy.visit('https://www.saucedemo.com/v1/inventory.html');
  
      // Seleciona  dois  produtos da lista
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
      cy.get('.inventory_item').eq(1).find('.btn_inventory').click();
  
      // Verifica se o ícone do carrinho foi atualizado com a quantidade correta de itens
      cy.get('.shopping_cart_badge').should('have.text', '2');
  
      // Verifica se os produtos foram adicionados ao carrinho ao acessar a página do carrinho
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 2);
    });
  });
  