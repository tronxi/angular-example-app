import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PokemonModel} from "../../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonStateService {

  private _pokemonState = new BehaviorSubject<PokemonModel | undefined>(undefined)

  constructor() { }

  get state$() {
    return this._pokemonState.asObservable();
  }

  update(pokemonModel: PokemonModel) {
    this._pokemonState.next(pokemonModel);
  }
}
