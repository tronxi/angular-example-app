import {Component, OnInit} from '@angular/core';
import {PokemonClientService} from "../../../services/pokemon-client.service";
import {PokemonModel} from "../../../models/pokemon";
import {PokemonStateService} from "../pokemon-state.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  pokemonList: PokemonModel[];
  filteredPokemonList: PokemonModel[];

  constructor(private pokemonClient: PokemonClientService,
              private pokemonStateService: PokemonStateService) {
    this.pokemonList = []
    this.filteredPokemonList = []
  }

  onFilter(event: any) {
    this.filteredPokemonList = this.pokemonList.filter(pk => pk.name.includes(event.target.value))
  }

  onClick(pokemonModel: PokemonModel) {
    this.pokemonStateService.update(pokemonModel);
  }

  ngOnInit(): void {
    this.pokemonClient.retrieveAll().subscribe(value => {
      value.results.map((pk: any, index: number) => {
          this.pokemonList.push({id: index, name: pk.name, url: pk.url})
        });
      this.filteredPokemonList = this.pokemonList;
    })
  }

}
