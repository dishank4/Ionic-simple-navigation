import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ProductProvider } from '../providers/product/product';
import { BuyPage } from '../pages/shop/buy/buy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShopPage,
    BuyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShopPage,
    BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
