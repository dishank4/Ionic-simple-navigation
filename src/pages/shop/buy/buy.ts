import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { ProductsModel } from "../../../models/product.model";

@Component({
    selector: 'app-buy',
    templateUrl:'buy.html'
})
export class BuyPage {

    product: ProductsModel;
    constructor(private navParams: NavParams , private navCtrl: NavController){
        this.product = this.navParams.get('product');
    }

    goToRoot(){
        this.navCtrl.popToRoot();
    }
    goBack() {
        this.navCtrl.pop();
    }
}