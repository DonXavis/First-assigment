import LoginPage from '../pages/LoginPage'
import ShoppingCart from '../pages/ShoppingCart'
import Inventory from '../pages/Inventory'
import CheckoutStep1 from '../pages/CheckoutStep1'
import CheckoutStep2 from '../pages/CheckoutStep2'
import Finish from '../pages/Finish'
import { CREDENTIALS } from '../data/Constants'

fixture('Shopping feature testing')
    .page `https://www.saucedemo.com/`
    .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LoginPage.loginButton)

test('User can navigate to the shopping cart', async t => {
    await t
    .await(Inventory.pageTitle.exists)
    .click(inventory.ShoppingCart.click) ok();
})

test('User can add an Item to the Shopping cart', async t => {
    await t
    .click(Inventory.addingItem.click)ok()

    await t.expect(ShoppingCart.continueButton.exists)ok()

})

test('User can add all items to the Shopping cart', async t => {
    await t
    .click(Inventory.addingAllItems.click)ok()

    await t.expect(ShoppingCart.continueButton.click)ok()

})

test('User recives zipCode error message', async t => {
    await t

    .typeText(ShoppingCart.missingInfoName, 'Xavier')
    .typeText(ShoppingCart.missingInfoLastname, 'Ramirez')
    .typeText(ShoppingCart.missingInfoZipcode, '')
    .click(ShoppingCart.missingInfo.click)ok()

    await t.expect(ShoppingCart.continueButton.click)ok()

})

test('User continuos to checkout step one', async t => {
    await t

    .typeText(ShoppingCart.missingInfoName, 'Xavier')
    .typeText(ShoppingCart.missingInfoLastname, 'Ramirez')
    .typeText(ShoppingCart.missingInfoZipcode, '45200')
    .click(ShoppingCart.fillInfo.click)ok()

    await t.expect(CheckoutStep2.completepurchase.exists)ok()
    
})

test('User recives zipCode error message', async t => {
    await t

    .typeText(ShoppingCart.missingInfoName, 'Xavier')
    .typeText(ShoppingCart.missingInfoLastname, 'Ramirez')
    .typeText(ShoppingCart.missingInfoZipcode, '45200')
    .click(ShoppingCart.completepurchase.click)ok()

    await t.expect(CheckoutStep2.completepurchase.click)ok()
    await t.expect(Finish.thanksMessage.exists)ok()

})