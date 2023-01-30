import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonModel } from './model/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'sample-angular';
  pokemonForm: FormGroup;
  allPokemons: PokemonModel[];
  pokemonToDisplay: PokemonModel[];

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.pokemonForm = fb.group({})
    this.allPokemons = [];
    this.pokemonToDisplay = [];
  }

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      name: this.fb.control(''),
      speciality: this.fb.control(''),
      imgUrl: this.fb.control(''),
    })
    this.pokemonService.getPokemons().subscribe(response => this.pokemonToDisplay = response)
  }
}
