import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StompComponent} from "./pages/stomp/stomp.component";
import {DefaultComponent} from "./pages/default/default.component";
import {HomeComponent} from "./pages/home/home.component";
import {CounterComponent} from "./pages/home/counter/counter.component";
import {PokemonListComponent} from "./pages/home/pokemon-list/pokemon-list.component";

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: 'counter', component: CounterComponent},
      {path: 'pokemon-list', component: PokemonListComponent}
    ]},
  {path: 'stomp', component: StompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
