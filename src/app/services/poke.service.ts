import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private placePokemonsUrl = 'pokemon?limit=100&offset=0';
  private placePokemonUrl = 'pokemon/';

  constructor(private http: HttpClient) { }

  /**
  * @description Obtem os pokemons.
  * @author Nathan Silva
  */
  getPokemons(): Observable<any>{
    return this.http.get<any>(`${environment.baseApiUrl}${this.placePokemonsUrl}`);
  }

  /**
  * @description Obtem um pokemon especifico.
  * @author Nathan Silva
  */
  getPokemon(name: string): Observable<any>{
    return this.http.get<any>(`${environment.baseApiUrl}${this.placePokemonUrl}${name}`);
  }

  /**
  * @description Obtem detalhes do Pokemon da url.
  * @author Nathan Silva
  */
  getUrlDetailPokemon(url: string){
    return this.http.get<any>(url);
  }
}
