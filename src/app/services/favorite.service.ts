import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "object";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  itemId:any;
  //filteredItems:any;
  
  constructor(private storage: Storage) { }

  getAllFavoriteItems(){
    return this.storage.get(STORAGE_KEY);
  }
  
  isFavorite(itemId) {
    return this.getAllFavoriteItems().then(result => {
      return result && result.indexOf(itemId) !== -1;
    });
  }
  
  favoriteItem(itemId) {
    return this.getAllFavoriteItems().then(result => {
      if (result) {
        result.push(itemId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [itemId]);
      }
    });
  }
  
  unfavoriteItem(itemId) {
    return this.getAllFavoriteItems().then(result => {
      if (result) {
        var index = result.indexOf(itemId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  
}