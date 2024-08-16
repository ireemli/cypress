/// <reference types="cypress" />
import LoginPage from "./loginPage";
import Add2Cart from "./add2Cart";
import Purchase from "./purchase"
import DeleteFromCart from "./delete";
describe('Luma Successful Login Tests', () => {
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

 describe("Add product to cart and Purchase",()=>{
  const loginPage = new LoginPage();
  const add2Cart = new Add2Cart();
  const purchase = new Purchase();
  it('product page should appear', () => {
    loginPage.visit();
    add2Cart.selectItem("Women","[title='Radiant Tee']","[id='option-label-size-143-item-167']","[id='option-label-color-93-item-50']");
    cy.get("button").contains("Add to Cart").click({force: true});
    purchase.getUsername("irem@gmail.com");
    purchase.getName("İrem");
    purchase.getLastName("H");
    purchase.getStreet("Kadiköy");
    purchase.getCity("İstanbul");
    purchase.getCountry("Turkey");
    purchase.getPostcode("3310");
    purchase.getTelephone("9173829");
    purchase.placeOrder();
}) 
});

describe("Delete product from cart",()=>{
  const loginPage = new LoginPage();
  const add2Cart = new Add2Cart();
  const deleteFromCart= new DeleteFromCart
  it.only('productshould be deleted from cart', () => {
    loginPage.visit();
    add2Cart.selectItem("Women","[title='Radiant Tee']","[id='option-label-size-143-item-167']","[id='option-label-color-93-item-50']");
    cy.wait(5000)
    deleteFromCart.deleteItem();
}) 
});
