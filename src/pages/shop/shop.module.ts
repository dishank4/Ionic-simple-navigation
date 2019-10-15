import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';
import { BuyPage } from './buy/buy'
import { ProductProvider } from '../../providers/product/product';

@NgModule({
  declarations: [
    ShopPage
  ],
  imports: [
    IonicPageModule.forChild(ShopPage),
  ],
  entryComponents: [
  ]
})
export class ShopPageModule {}
