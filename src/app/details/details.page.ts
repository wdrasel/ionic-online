import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipiService } from '../services/recipi.service';
import { FavoriteService } from '../services/favorite.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  information : any ;
  isFavorite = false;
  itemId = null;

  constructor(private activatedRoute: ActivatedRoute, private recipiservice: RecipiService ,
    private favoriteService:FavoriteService
    ) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    //let itemId = this.activatedRoute.snapshot.paramMap.get('id');

     this.recipiservice.getDetails(this.itemId).subscribe(item => {
       //console.log('details', item)
       this.information = item;
     });

     this.favoriteService.isFavorite(this.itemId).then(isFav => {
      this.isFavorite = isFav;
    })

  }

  favoriteItem() {
    this.favoriteService.favoriteItem(this.itemId).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavoriteItem() {
    this.favoriteService.unfavoriteItem(this.itemId).then(() => {
      this.isFavorite = false;
    });
  }

}
