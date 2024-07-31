class LoginPage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com');
    }
    signIn(){
        cy.get('a').contains('Sign In').click();
      }  
      
      enterEmail(email){
        cy.get("[id='email']").type("iremhverdi@gmail.com")
      }
      
      enterPassword(password){
        cy.get("[id='pass']").type("929568Ab")
      } 
      
      login(){
        cy.get("span").contains("Sign In").click();
      }
}
export default LoginPage;
