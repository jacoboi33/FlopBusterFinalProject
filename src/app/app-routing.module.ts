import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { LoginComponent } from './login/login.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { RentalCartComponent } from './rental-cart/rental-cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rental', component: RentalCartComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'actors', component: ActorListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
