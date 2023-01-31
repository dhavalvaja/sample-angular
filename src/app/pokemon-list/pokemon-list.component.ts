import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Notification } from '../model/notification.model';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class PokemonListComponent implements OnInit {
  searchText = '';
  addPokemonForm: FormGroup;
  allPokemons: PokemonModel[];
  pokemonToDisplay: PokemonModel[];
  isNotificationOn: boolean = false;
  notification: Notification | null
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(private fb: FormBuilder, private pokemonService: PokemonService, config: NgbModalConfig, private modalService: NgbModal) {
    this.addPokemonForm = fb.group({})
    this.allPokemons = [];
    this.pokemonToDisplay = [];
    this.notification = null
    config.backdrop = 'static';
    config.keyboard = false
  }

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.addPokemonForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      speciality: this.fb.control('', [Validators.required]),
      imgUrl: this.fb.control('', [Validators.required]),
    })

    const handleFetchAllPokemons = (fetchedPokemons: PokemonModel[]) => {
      this.pokemonToDisplay = fetchedPokemons
      this.allPokemons = fetchedPokemons;
      this.collectionSize = this.allPokemons.length
      this.refreshPokemons()
    }

    this.pokemonService.getPokemons().subscribe({
      next: handleFetchAllPokemons.bind(this),
      error: (error) => {
        this.showNotification(new Notification('error', error.message))
      }
    });
  }

  refreshPokemons() {
    this.pokemonToDisplay = this.allPokemons
      .map((pokemon, i) => ({ id: i + 1, ...pokemon }))
      .slice((this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize);
  }


  filterPokemon(event: any) {
    this.searchText = event.target.value.toLowerCase()
    this.pokemonToDisplay = this.allPokemons.filter(pokemon => {
      return this.filterByPokemonDetails(pokemon)
    })
  }

  private filterByPokemonDetails(pokemon: PokemonModel): unknown {
    return pokemon.name.toLowerCase().includes(this.searchText)
      || pokemon.speciality.toLowerCase().includes(this.searchText)
      || pokemon.id?.toString() === this.searchText;
  }

  public get Name(): FormControl {
    return this.addPokemonForm.get('name') as FormControl
  }
  public get Image(): FormControl {
    return this.addPokemonForm.get('imgUrl') as FormControl
  }
  public get Speciality(): FormControl {
    return this.addPokemonForm.get('speciality') as FormControl
  }

  clearForm() {
    this.addPokemonForm.reset();
  }

  showNotification(notification: Notification) {
    this.isNotificationOn = true;
    this.notification = notification;
    setTimeout(() => {
      this.hideNotification()
    }, 3000);
  }

  hideNotification() {
    this.isNotificationOn = false;
    this.notification = null;
  }

  savePokemon() {
    let pokemon: PokemonModel = {
      name: this.Name.value,
      speciality: this.Speciality.value,
      imgUrl: this.Image.value,
    }
    
    const handleNextResponse = (savedPokemon: PokemonModel) => {
      this.allPokemons = this.allPokemons.concat([savedPokemon]);
      this.showNotification(new Notification('success', `Pokemon ${savedPokemon.name} added successfully!`))
      this.clearForm();
      this.modalService.dismissAll()
    }

    const handleErrorResponse = (error: any) => {
      this.showNotification(new Notification('error', error.message))
      this.clearForm();
    }

    this.pokemonService.savePokemon(pokemon).subscribe({
      next: handleNextResponse.bind(this),
      error: handleErrorResponse.bind(this)
    })
  }
}
