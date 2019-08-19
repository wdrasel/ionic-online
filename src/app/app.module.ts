import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipiService } from './services/recipi.service';
import { Market } from '@ionic-native/market/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FavoriteService } from './services/favorite.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({_forceStatusbarPadding:true}),
     AppRoutingModule, HttpClientModule ,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    RecipiService,
    FavoriteService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Market
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
