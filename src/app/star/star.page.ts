import { Component, OnInit } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';

@Component({
  selector: 'app-star',
  templateUrl: './star.page.html',
  styleUrls: ['./star.page.scss'],
})
export class StarPage implements OnInit {

  constructor(private market: Market) { 
    this.market.open('com.supportpoint.billionaire');
  }

  ngOnInit() {
  }

}
