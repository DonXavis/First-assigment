import { Selector } from 'testcafe'

class Shopping_Cart {
    constructor (){
        this.continueButton = Selector('.checkout_button')
        this.missingInfoName = Selector('#first-name')
        this.missingInfoLastname = Selector('#last-name')
        this.missingInfoZipcode = Selector('#postal-code')
        this.missingInfo = Selector('.error-button')
        this.fillInfo = Selector('.btn_primary')
        this.completepurchase = Selector('.car_button')
    }
}

export default new Shopping_Cart()
   
