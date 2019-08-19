import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
} from '@ionic-native/admob-free/ngx'
import { Platform } from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class RecipiService {
  items: any;
  url = '/assets/resource.json';
  time = interval(1000);

  //Interstitial Ad's Configarations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    //add your config
    //for the sake of this example we will just use the test config
    id: "ca-app-pub-7062962198011740/4710814787",
    isTesting: false,
    autoShow:false,
    
 };

   constructor(
    private http:HttpClient,
    private admobFree:AdMobFree,
    public platform:Platform
    ) {
      platform.ready().then(() => {
        //Load ad configuration 
        this.admobFree.interstitial.config(this.interstitialConfig);
        //Prepare Ad to show
        this.admobFree.interstitial.prepare().then(() => {
          // alert(1);
        })
        
      })//.catch(e => alert(e));
  
    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {

      setInterval(() => {
        this.admobFree.interstitial.prepare().then(() => {
          //alert("Interstitial CLOSE");
        });
        }, 60000); 
    });

    this.getData().subscribe(results =>{
      console.log(results);
      this.items = results;
  });
    
    }

 BannerAd(){
  let bannerConfig: AdMobFreeBannerConfig = {
    id: "ca-app-pub-7062962198011740/6023896451",
    isTesting: false,
    autoShow:true
    
  };
  this.admobFree.banner.config(bannerConfig);
  this.admobFree.banner.prepare().then(() => {
    // success
  })//.catch(e => alert(e));
}

InterstitialAd(){
  //Chack if Ad is loaded 
  
  this.admobFree.interstitial.isReady().then(()=> {
    //will show prepared  Ad
    this.admobFree.interstitial.show().then(() => {
    })
      
  })//.catch(e => alert("isReady " + e));
  
}

  // get singel data  
  getData(){
    let data: Observable<any> = this.http.get(this.url);
    return data;
}

// get full data 
 getDetails(id) {
  let data: Observable<any> = this.http.get(this.url);
   return data
     .pipe(map((items) => {
      return items.find((item) => 
       (item.id == id));
           
       })
     );
 }
}

