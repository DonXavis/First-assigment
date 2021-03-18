import { Selector } from 'testcafe'

class Login_LogoutPage {
    constructor (){
        this.usernameField = Selector('input[type="text" i]')
        this.passwordField = Selector('input[type="password" i]')
        this.loginButton = Selector('#login-button')
        this.sadfaceMessage = Selector('#login_button_container > div > form > h3')
        this.logOut = Selector('#logout_sidebar_link')
    }
}

export default new Login_LogoutPage()
   
