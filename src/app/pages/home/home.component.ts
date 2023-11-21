import { Component } from '@angular/core';
import {PokemonStateService} from "./pokemon-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pokemonState$ = this.pokemonStateService.state$;
  constructor(private pokemonStateService: PokemonStateService) {
  }

}
