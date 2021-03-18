import { Selector } from 'testcafe'

class Products {
    constructor (){
        this.pageTitle = Selector('.product_label')
        this.navigationMenu = Selector('#react-burger-menu-btn')
        this.shoppingCart = Selector('.svg-inline--fa')
        this.addingItem = Selector('div.inventory_item:nth-child(4) > div:nth-child(3) > button:nth-child(2)')
        this.addingAllItems = Selector('div.inventory_item:nth-child(1) > div:nth-child(3) > button:nth-child(2), div.inventory_item:nth-child(3) > div:nth-child(3) > button:nth-child(2), div.inventory_item:nth-child(5) > div:nth-child(3) > button:nth-child(2), div.inventory_item:nth-child(2) > div:nth-child(3) > button:nth-child(2), div.inventory_item:nth-child(4) > div:nth-child(3) > button:nth-child(2), div.inventory_item:nth-child(6) > div:nth-child(3) > button:nth-child(2)')
    }
}

export default new Products()
   
