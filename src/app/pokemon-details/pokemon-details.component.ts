import { Component, Input } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  @Input() pokemon: PokemonModel
  @Input() searchText: string
  constructor() {
    this.pokemon = {
      name: '',
      imgUrl: '',
      speciality: ''
    }
    this.searchText = ''
  }
}
