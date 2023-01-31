import { Component, Input } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'PokeAPI';
}
