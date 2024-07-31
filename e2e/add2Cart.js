class Add2Cart{
    selectItem(section,item,size,color){
    cy.get("[role='menuitem']").contains(section).click();
    cy.get(item).click();
    cy.get(size).click();
    cy.get(color).click();
    cy.get("button").contains("Add to Cart").click({force: true});
    }
    
}
export default Add2Cart;
