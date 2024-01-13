import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { ActivatedRoute } from '@angular/router';

import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent implements OnInit {
  pokemon?: any;
  textNotTranslate: string = '';
  textTranslate: string = '';

  constructor(private pokeService: PokeService, private activatedRoute: ActivatedRoute, private translationService: TranslateService){}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    const name = String(this.activatedRoute.snapshot.paramMap.get("name"));
    this.pokeService.getPokemon(name).subscribe(
      (pokemon) => {
        this.pokemon = pokemon;
        this.textNotTranslate = pokemon.name;
      }
    )
  }
}
