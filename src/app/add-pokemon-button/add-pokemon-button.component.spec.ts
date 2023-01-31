import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonButtonComponent } from './add-pokemon-button.component';

describe('AddPokemonButtonComponent', () => {
  let component: AddPokemonButtonComponent;
  let fixture: ComponentFixture<AddPokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPokemonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
