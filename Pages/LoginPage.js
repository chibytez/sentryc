
class LoginPage {
    navigate() {
       return cy.visit("https://login.sentryc.com/auth/login")
    }

    enterEmail(useremail) {
        cy.get('.jss31.jss16.large-input__base-input__native-input')
            .eq(0)
            .clear()
            .type(useremail)
        return this
    }

    outsideField(){
        cy.get('.custom-container').click()
    }

    enterPassword(userpassword){
        cy.get('.jss31.jss16.large-input__base-input__native-input')
            .eq(1)
            .clear()
            .type(userpassword)
        return this
    }

    container(value){
       return  cy.contains(value)
    }

    submit(){
       return cy.get('[type=submit]')
    }
}

export default LoginPage