import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';

const routes: Routes = [
  { path: '', title: "PokeAPI", component: HomeComponent },
  { path: 'about', title: "PokeAPI - About", component: AboutComponent },
  { path: 'pokemon-list', title: "PokeAPI - List", component: PokemonListComponent },
  { path: 'pokemon-list/:id', title: "PokeAPI - View", component: PokemonViewComponent },
  { path: '**', title: "PokeAPI - Error", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
