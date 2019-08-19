import { Component, OnInit } from '@angular/core';
import { RecipiService } from '../services/recipi.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // This property will save the callback which we can unsubscribe when we leave this view
  public unsubscribeBackEvent: any;
  items: any;
  subscription: any;
  constructor(
    private recipiservice:RecipiService,
    private platform: Platform,
    ){

  }

  ngOnInit(){
    this.recipiservice.getData().subscribe(results =>{
      // console.log(this.jsons);
        this.items = results;
    });

    this.recipiservice.BannerAd();
  }

   showInterstitial(){
    this.recipiservice.InterstitialAd();
   }

   ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

ionViewWillLeave(){
    this.subscription.unsubscribe();
}

  
}
