/// <reference types="cypress" />
import LoginPage from "./loginPage";
describe('Luma Successful Login Tests', () => {
  const loginPage = new LoginPage();
    it('should log in successfully with valid credentials', () => {
      loginPage.visit();
      loginPage.signIn();
      loginPage.enterEmail("irem@gmail.com");
      loginPage.enterPassword("123456Ab");
      cy.get("span").contains("Sign In").click();
  })
});

describe("Luma Unsuccessful Login Tests",()=>{
  const loginPage = new LoginPage();
    it('should not log in successfully with invalid credentials', () => {
      loginPage.visit();
      cy.get('a').contains('Sign In').click();
      cy.get("[id='email']").type("aysegmail.com")
      cy.get("[id='pass']").type("123789Qw")
      cy.get("span").contains("Sign In").click();
  }) 
}); 

//The products in "What's New, change by day. Should find a permanent menu selection"
describe("Add product to cart and Purchase",()=>{
  const loginPage = new LoginPage();
  it('product page should appear', () => {
    loginPage.visit();
    cy.get("[role='menuitem']").contains("Women").click();
    cy.get("[title='Radiant Tee']").click();
    cy.get("[id='option-label-size-143-item-167']").click();
    cy.get("[id='option-label-color-93-item-50']").click();
    cy.get("button").contains("Add to Cart").click({force: true});
    cy.wait(6000)
    cy.get("[class='action showcart']").click();
    cy.get("[id='top-cart-btn-checkout']").click();
    cy.wait(6000)
    cy.get("[id='customer-email']").first().type("irem@gmail.com");//doesn't work,can't fix that
    cy.get("[name='firstname']").type("İrem");
    cy.get("[name='lastname']").type("H");
    cy.get("[name='street[0]']").type("Kadiköy");
    cy.get("[name='city']").type("İstanbul");
    cy.get("[name='country_id']").select("Turkey");
    cy.get("[name='postcode']").type("3310");
    cy.get("[name='telephone']").type("918272839");
    cy.get("[name='ko_unique_1']").click();
    cy.get("span").contains("Next").click();
    cy.wait(6000);
    cy.get("[name='billing-address-same-as-shipping']").click();
    cy.get("span").contains("Place Order").click();
}) 
});

describe("Delete product from cart",()=>{
  const loginPage = new LoginPage();
  it('productshould be deleted from cart', () => {
    loginPage.visit();
    cy.get("[role='menuitem']").contains("Women").click();
    cy.get("[title='Radiant Tee']").click();
    cy.get("[id='option-label-size-143-item-167']").click();
    cy.get("[id='option-label-color-93-item-50']").click();
    cy.get("button").contains("Add to Cart").click();
    cy.wait(5000)
    cy.get("[title='Remove item']").click({force: true});
    cy.get("span").contains("OK").click({force: true});
    cy.get("[class='action showcart']").click();
    cy.get("[id='ui-id-1']").should('contain.text', "You have no items in your shopping cart.");
}) 
});

