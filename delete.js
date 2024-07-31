class DeleteFromCart{
    deleteItem(){
    cy.get("[title='Remove item']").click({force: true});
    cy.get("span").contains("OK").click({force: true});
    cy.get("[class='action showcart']").click();
    cy.get("[id='ui-id-1']").should('contain.text', "You have no items in your shopping cart.");
    }
}
export default DeleteFromCart;