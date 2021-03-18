import LoginPage from '../pages/LoginPage'
import ShoppingCart from '../pages/ShoppingCart'
import Inventory from '../pages/Inventory'
import CheckoutStep1 from '../pages/CheckoutStep1'
import CheckoutStep2 from '../pages/CheckoutStep2'
import Finish from '../pages/Finish'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login with valid credentials', async t => {
    await t
    .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LoginPage.loginButton)

    await t.expect(Inventory.pageTitle.exists).ok()
})

test('Users cannot login with invalid credentials', async t => {
    await t
    .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
    .click(LoginPage.loginButton)

    await t.expect(LoginPage.sadfaceMessage.exists).ok()
    await t.expect(LoginPage.sadfaceMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})