import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public isFound:boolean = true;

  pokemons: any[] = [];

  constructor(private pokeService: PokeService){
  }

  ngOnInit(): void {
    this.getPokemonDetailsList();
    console.log(this.pokemons)
  }

  /**
  * @description Obtem detalhes dos Pokemon e os adiciona a lista de Pokemon.
  * @author Nathan Silva
  */
  getPokemonDetailsList(){
    // Recebo a lista de pokemons.
    this.pokeService.getPokemons().subscribe(
      (response: any) => {
        // Faço um "for" para todos os pokemons.
        response.results.forEach((i: any) => {
          // Chamo o metodo que recebe a url que tem os detalhes do pokemon.
          this.pokeService.getUrlDetailPokemon(i.url).subscribe(
            (detailsPokemon: object) => {
              // Adiciono os detalhes obtido como nova propiedade do objeto de cada pokemon.
              const pokemonDetails = { ...i, details: detailsPokemon };
              // Envio o resultado final para um array.
              this.pokemons.push(pokemonDetails);
            }
          );
        });
      }
    )
  }
}
