class Purchase{
    createOrder(){
        cy.get("[class='action showcart']").click();
        cy.get("[id='top-cart-btn-checkout']").click();
    }
    getUsername(email){
        cy.get("[id='customer-email']").first().type(email,{ force: true });
    }
    getName(name){
        cy.get("[name='firstname']").type(name);
    }
    getLastName(lastname){
        cy.get("[name='lastname']").type(lastname);
    }
    getStreet(street){
        cy.get("[name='street[0]']").type(street);
    }
    getCity(city){
        cy.get("[name='city']").type(city);
    }
    getCountry(country){
        cy.get("[name='country_id']").select(country);
    }
    getPostcode(postcode){
        cy.get("[name='postcode']").type(postcode);
    }
    getTelephone(telephone){
         cy.get("[name='telephone']").type(telephone);
    }    
    placeOrder(){
        cy.get("[name='ko_unique_1']").click();
        cy.get("span").contains("Next").click();
        cy.wait(6000);
        cy.get("[name='billing-address-same-as-shipping']").click();
        cy.get("span").contains("Place Order").click();
    }
}
export default Purchase;
