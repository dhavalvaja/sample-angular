import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';

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
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
