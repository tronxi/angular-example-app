import {Component, Input} from '@angular/core';
import {PokemonModel} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent {
  @Input()
  pokemon: PokemonModel | undefined;

  @Input()
  handleClick: () => void = () => {};

}
