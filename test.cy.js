/// <reference types="cypress" />
import LoginPage from "./loginPage";
import Add2Cart from "./add2Cart";
import Purchase from "./Purchase";
/*describe('Luma Successful Login Tests', () => {
  const loginPage = new LoginPage();
    it('should log in successfully with valid credentials', () => {
      loginPage.visit();
      loginPage.signIn();
      loginPage.enterEmail("irem@gmail.com");
      loginPage.enterPassword("123456Ab");
      loginPage.login();
  })
});

describe("Luma Unsuccessful Login Tests",()=>{
  const loginPage = new LoginPage();
    it('should not log in successfully with invalid credentials', () => {
      loginPage.visit();
      loginPage.signIn();
      loginPage.enterEmail("ayse@gmail.com");
      loginPage.enterPassword("123789Qw");
      loginPage.login();
  }) 
}); 
*/
describe("Add product to cart and Purchase",()=>{
  const loginPage = new LoginPage();
  const add2Cart = new Add2Cart();
  const purchase = new Purchase();
  it('product page should appear', () => {
    loginPage.visit();
    add2Cart.selectItem("Women","[title='Radiant Tee']","[id='option-label-size-143-item-167']","[id='option-label-color-93-item-50']");
    cy.wait(6000)
    purchase.createOrder();
    cy.wait(6000)
    purchase.getInfo("irem@gmail.com","İrem","H","Kadiköy","İstanbul","Turkey","3310","9173829");
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
