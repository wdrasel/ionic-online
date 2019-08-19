import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ 
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full' 
},
{ 
  path: 'home', 
  loadChildren: './home/home.module#HomePageModule'
},
{ 
  path: 'details/:id', 
  loadChildren: './details/details.module#DetailsPageModule' 
},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule'},
  { path: 'star', loadChildren: './star/star.module#StarPageModule' },
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
