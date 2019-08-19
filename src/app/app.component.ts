import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages=[
    {
      title: 'Home',
      url: '/home',
      icon:'home'
    },
    {
      title: 'My Favorite',
      url: '/favorite',
      icon: 'star'
    },
    {
      title: 'Give 5 star',
      url: '/star',
      icon: 'star'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help-circle'
    },
    {
      title: 'Version 1',
      icon: 'git-branch'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      enableProdMode();
    });
    

  }
}
