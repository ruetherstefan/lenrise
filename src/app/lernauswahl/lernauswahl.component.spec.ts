/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { LernauswahlComponent } from './lernauswahl.component';
import {BibliothekService} from '../lernen/bibliothek.service'
import {GehirnService} from '../persistence/gehirn.service'
import {LocalStorageServiceStub} from '../persistence/gehirn.service.spec'

describe('LernauswahlComponent', () => {
  let component: LernauswahlComponent;
  let fixture: ComponentFixture<LernauswahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LernauswahlComponent ],
      providers: [BibliothekService, GehirnService, 
      { provide: Router, useClass: RouterStub },
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

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }
});
