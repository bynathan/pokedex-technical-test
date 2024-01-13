import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedetailsComponent } from './components/pokedetails/pokedetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon/:name', component: PokedetailsComponent },
  { path: '**', redirectTo: '/pokedex' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
