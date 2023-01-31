import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { AddPokemonButtonComponent } from './add-pokemon-button/add-pokemon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonDetailsComponent,
    AboutComponent,
    PokemonListComponent,
    HomeComponent,
    ErrorPageComponent,
    PokemonViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
