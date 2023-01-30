import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  isSuccess: boolean

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.pokemonForm = fb.group({})
    this.allPokemons = [];
    this.pokemonToDisplay = [];
    this.isSuccess = false
  }

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      name: this.fb.control(''),
      speciality: this.fb.control(''),
      imgUrl: this.fb.control(''),
    })
    this.pokemonService.getPokemons().subscribe(response => this.allPokemons = response)
  }

  public get Name(): FormControl {
    return this.pokemonForm.get('name') as FormControl
  }

  public get Image(): FormControl {
    return this.pokemonForm.get('imgUrl') as FormControl
  }
  public get Speciality(): FormControl {
    return this.pokemonForm.get('speciality') as FormControl
  }

  clearForm() {
    this.Name.setValue('');
    this.Image.setValue('');
    this.Speciality.setValue('');
  }

  toggle() {
    this.isSuccess = false
  }

  savePokemon() {
    let pokemon: PokemonModel = {
      name: this.Name.value,
      speciality: this.Speciality.value,
      imgUrl: this.Image.value,
    }
    console.log(pokemon);

    this.pokemonService.savePokemon(pokemon).subscribe(responce => {
      this.allPokemons.unshift(responce)
      this.isSuccess = true
      this.clearForm()
    })
  }
}
