import {Component, Input} from '@angular/core';
import {PokemonModel} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.css']
})
export class PokemonSelectedComponent {

  @Input()
  pokemon: PokemonModel | undefined;

}
