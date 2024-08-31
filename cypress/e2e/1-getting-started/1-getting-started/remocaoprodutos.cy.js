describe('Remover Produtos do Carrinho', () => {
    it('remove dois produtos do carrinho', () => {
        cy.visit('https://saucedemo.com/v1/inventory.html');

        // Adiciona dois produtos ao carrinho 
        cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
        cy.get('.inventory_item').eq(1).find('.btn_inventory').click();

        // Acessa o carrinho
        cy.get('.shopping_cart_link').click();

        // Remove os dois produtos do carrinho
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click(); 
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click();
        cy.wait(5000);

        // Verifica se o carrinho está vazio
        cy.get('.empty_cart').as('emptyCart');
        cy.get('#header_container');
        cy.wait('@emptyCart').should('be.visible');
    });
});
