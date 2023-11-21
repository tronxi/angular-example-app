import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StompComponent } from './pages/stomp/stomp.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/home/counter/counter.component';
import { PokemonListComponent } from './pages/home/pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonSelectedComponent } from './components/pokemon-selected/pokemon-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    StompComponent,
    DefaultComponent,
    HomeComponent,
    CounterComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
