/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {LocalStorageServiceStub} from '../persistence/gehirn.service.spec'

import { LernauswahlComponent } from './lernauswahl.component';
import {BibliothekService} from '../lernen/bibliothek.service'
import {GehirnService} from '../persistence/gehirn.service'

describe('LernauswahlComponent', () => {
  let component: LernauswahlComponent;
  let fixture: ComponentFixture<LernauswahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernauswahlComponent ],
      providers: [BibliothekService, GehirnService, 
      {provide: LocalStorageService, useClass: LocalStorageServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LernauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
