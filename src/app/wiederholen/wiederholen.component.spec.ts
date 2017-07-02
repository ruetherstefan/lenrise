/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { WiederholenComponent } from './wiederholen.component';
import {Vokabel, BibliothekService} from '../lernen/bibliothek.service';
import {Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service';
import {GehirnService} from '../persistence/gehirn.service'
import {LocalStorageServiceStub} from '../persistence/gehirn.service.spec'

describe('WiederholenComponent', () => {
  let component: WiederholenComponent;
  let fixture: ComponentFixture<WiederholenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiederholenComponent ],
      imports: [ FormsModule ],
      providers: [BibliothekService,
                  GehirnService, 
        {provide: LocalStorageService, useClass: LocalStorageServiceStub },
        { provide: Router, useClass: RouterStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiederholenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }
});
