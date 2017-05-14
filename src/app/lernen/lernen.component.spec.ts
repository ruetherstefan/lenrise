/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {LernenComponent } from './lernen.component';
import {Vokabel, BibliothekService} from './bibliothek.service'
import {Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service';


describe('LernenComponent', () => {
  let component: LernenComponent;
  let fixture: ComponentFixture<LernenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernenComponent ],
      imports: [ FormsModule ],
      providers: [BibliothekService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should bei falsch Wiederholen ans Ende anfügen', () => {
    //wenn
    let aktuelle_lerneinheit = new Lerneinheit(new Vokabel("x", "y"), Lernart.Wiederholen);
    component.lernplan.einheiten = [aktuelle_lerneinheit];

    component.vokabel_eingabe = "falsch";

    //do
    expect(component.lernplan.einheiten.length).toEqual(1);
    component.weiter();
    
    //verify
    expect(component.lernplan.einheiten.length).toBeGreaterThan(1);
    let lerneinheit_am_ende = component.lernplan.einheiten[component.lernplan.einheiten.length-1];
    expect(lerneinheit_am_ende).toEqual(aktuelle_lerneinheit);
  });


  it('should bei falsch direkt Anschauen', () => {
    //wenn
    let aktuelle_lerneinheit = new Lerneinheit(new Vokabel("x", "y"), Lernart.Wiederholen);
    component.lernplan.einheiten = [aktuelle_lerneinheit];

    component.vokabel_eingabe = "falsch";

    //do
    expect(component.lernplan.einheiten.length).toEqual(1);
    component.weiter();
    
    //verify
    expect(component.lernplan.einheiten.length).toBeGreaterThan(1);
    let naechste_lerneinheit = component.lernplan.einheiten[1];
    expect(naechste_lerneinheit).toEqual(new Lerneinheit(aktuelle_lerneinheit.vokabel, Lernart.Anschauen));
  });

});
