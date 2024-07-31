class LoginPage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com');
    }
    signIn(email,password){
        cy.get('a').contains('Sign In').click();
      }  
      
      enterEmail(email){
        cy.get("[id='email']").type(email)
      }
      
      enterPassword(password){
        cy.get("[id='pass']").type(password)
      } 
      
      login(){
        cy.get("span").contains("Sign In").click();
      }
}
export default LoginPage;
