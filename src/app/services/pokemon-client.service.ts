import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonClientService {

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<any> {
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?limit=150");
  }
}
