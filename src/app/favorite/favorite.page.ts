import { Component, OnInit } from '@angular/core';
import { RecipiService } from '../services/recipi.service';
import { FavoriteService } from '../services/favorite.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  favouriteIds:any;
  
 
  constructor(
    private recipiservice:RecipiService,
    private favoriteService: FavoriteService,
    private storage: Storage
  
  ) {
    
   }

  ngOnInit() {
  
    this.storage.get("object").then((ids) => {
      console.log( "test", JSON.stringify(ids));
      this.favouriteIds = JSON.parse(ids);
      
    })
}


// getFavorites():Promise<any>{
//   let favorites = this.storage.get("object");
//   return favorites;
// }

// getFav(){
//   this.storage.get('favorites').then(ids => {
//     this.favouriteIds = ids;
//     this.favitems = JSON.parse(JSON.stringify(this.recipiservice.items));
//     this.favitems = this.favitems.filter((item) => {
//     return this.favouriteIds.indexOf(item.id) !== -1;
//     });
//     });
// }




  

}
