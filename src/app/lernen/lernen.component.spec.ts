/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {Observable} from 'rxjs/Rx';

import {LernenComponent } from './lernen.component';
import {Vokabel, BibliothekService} from './bibliothek.service'
import {Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service';
import {GehirnService} from '../persistence/gehirn.service'
import {LocalStorageServiceStub} from '../persistence/gehirn.service.spec'


describe('LernenComponent', () => {
  let component: LernenComponent;
  let fixture: ComponentFixture<LernenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernenComponent ],
      imports: [ FormsModule ],
      providers: [BibliothekService,
                  GehirnService, 
        {provide: LocalStorageService, useClass: LocalStorageServiceStub },
        { provide: Router, useClass: RouterStub },
        {provide: ActivatedRoute, useValue: {
            params: Observable.of({vokabeln: 'Blaumeise'})
          }
        }
      ]
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


  it('should zum Hauptmenu navigieren wenn fertig',
    inject([Router], (router: Router) => {

    //wenn
    const spy = spyOn(router, 'navigateByUrl');

    let aktuelle_lerneinheit = new Lerneinheit(new Vokabel("richtig", "y"), Lernart.Wiederholen);
    component.lernplan.einheiten = [aktuelle_lerneinheit];
    component.vokabel_eingabe = "richtig";

    //do
    component.weiter();

    //verify
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).toBe('/', 'zum Hauptmenu navigieren ');
  }));

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

});
