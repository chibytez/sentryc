/// <reference types="cypress" />

import Login from "../../../Pages/LoginPage";

describe("Login test", ()=>{

    const login = new Login()
    
    before('launch url', () => {
        login.navigate()
        cy.url().should('be.equal', 'https://login.sentryc.com/auth/login')
    })

    it("should not login invalid email",()=>{
        login.enterEmail("myemail")
        login.outsideField()
        login.container('The email format is invalid.')
    })

    it("email field should not be empty", () =>{
        login.enterEmail(" ")
        login.outsideField()
        login.container('The email field is required.')
    })

    it("password field should not be empty",()=> {
        login.enterEmail(" ")
        login.outsideField()
        login.container('The password field is required.')
    })

    it("password should not be weak", ()=>{
        login.enterPassword("password")
        login.outsideField()
        login.container('Password must contains 1 capital and 1 special symbol')
    })

    it('should not be able to click th submit button if there is any error', ()=>{
        login.submit().should('be.disabled')
    })

    it("should be able to click submit and detect incorrect password", ()=> {
        //its advisable to put your login values in a dotenv and import it
        login.enterEmail("aniakuchibuike@gmail.com")
        login.enterPassword("Password9%")
        login.submit().click()
        login.container('The authentication is invalid!')
    })

})