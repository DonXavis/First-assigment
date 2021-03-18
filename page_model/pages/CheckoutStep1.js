import { Selector } from 'testcafe'

class checkOut1 {
    constructor (){
        this.missingInfoName = Selector('#first-name')
        this.missingInfoLastname = Selector('#last-name')
        this.missingInfoZipcode = Selector('#postal-code')
        this.missingInfo = Selector('.error-button')
        this.fillInfo = Selector('.btn_primary')
    
    }
}

export default new checkOut1()
   