import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private placePokemonUrl = 'pokemon?limit=100&offset=0';

  constructor(private http: HttpClient) { }

  /**
  * @description Obtem os pokemons.
  * @author Nathan Silva
  */
  getPokemons(): Observable<any>{
    return this.http.get<any>(`${environment.baseApiUrl}${this.placePokemonUrl}`);
  }

  /**
  * @description Obtem detalhes do Pokemon da url.
  * @author Nathan Silva
  */
  getUrlDetailPokemon(url: string){
    return this.http.get<any>(url);
  }

  teste(result: any) {
    console.log(result);
  }
}
