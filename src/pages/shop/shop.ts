import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductsModel } from '../../models/product.model';
import { BuyPage } from './buy/buy';


/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  products: ProductsModel[]; 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductProvider
    ) {
      this.products = this.productService.getProducts()
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  buyProduct(id: number){

    this.navCtrl.push(BuyPage,{
      product: this.products.find((product) => { return product.id === id})
    });
  }

}
