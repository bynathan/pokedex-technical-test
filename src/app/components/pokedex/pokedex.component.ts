import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  allPokemons: any[] = [];

  constructor(private pokeService: PokeService){
  }

  ngOnInit(): void {
    this.getPokemonDetailsList();
  }

  /**
  * @description Obtem o pokemon, recebe os detalhes obtidos na url do objeto pokemon, cria um novo objeto e envia para uma lista.
  * @author Nathan Silva
  */
  getPokemonDetailsList(){
    // Recebo a lista de pokemons.
    this.pokeService.getPokemons().subscribe(
      (response: any) => {
        // Faço um "map" para que pegue a url de todos os pokemons e faça um GET das informações de detalhes que contem na url.
        response.results.map((pokemon: any) => this.pokeService.getUrlDetailPokemon(pokemon.url).subscribe(
          (detailsPokemon: object) => {
            // Envio o novo objeto com o detalhes do pokemon adiquiridos na url para um array.
            this.pokemons.push({ details: detailsPokemon });
            // Atribuo a outra variavel para utilizala novamente no filtro.
            this.allPokemons = this.pokemons;
          }
        ))
      }
    )
  }

  /**
  * @description Filtra a lista de pokémons com base no valor de pesquisa fornecido para o nome do pokémon.
  * @author Nathan Silva
  */
  resultSearch(value: string) {
    this.pokemons = this.allPokemons;

    const filter = this.pokemons.filter((pokemon: any) => {
      return pokemon.details.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  
    this.pokemons = filter;
  }
}
