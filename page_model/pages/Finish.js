import { Selector } from 'testcafe'

class Finish {
    constructor (){
        this.thanksMessage = Selector('.complete-header')
    }
}

export default new Finish()