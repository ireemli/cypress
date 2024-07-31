class Purchase{
    createOrder(){
        cy.get("[class='action showcart']").click();
        cy.get("[id='top-cart-btn-checkout']").click();
    }
    getInfo(email,name,lastname,street,city,country,postcode,telephone){
        cy.get("[id='customer-email']").first().type(email,{ force: true });//doesn't work,can't fix that
        cy.get("[name='firstname']").type(name);
        cy.get("[name='lastname']").type(lastname);
        cy.get("[name='street[0]']").type(street);
        cy.get("[name='city']").type(city);
        cy.get("[name='country_id']").select(country);
        cy.get("[name='postcode']").type(postcode);
        cy.get("[name='telephone']").type(telephone);
        cy.get("[name='ko_unique_1']").click();
        cy.get("span").contains("Next").click();
        cy.wait(6000);
        cy.get("[name='billing-address-same-as-shipping']").click();
        cy.get("span").contains("Place Order").click();
    }
    
}
export default Purchase;
