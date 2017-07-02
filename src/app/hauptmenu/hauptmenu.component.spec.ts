/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { HauptmenuComponent } from './hauptmenu.component';
import {VokabelboxService} from '../lernen/vokabelbox.service'
import {BibliothekService} from '../lernen/bibliothek.service'
import {GehirnService} from '../persistence/gehirn.service'
import {LocalStorageServiceStub} from '../persistence/gehirn.service.spec'

describe('HauptmenuComponent', () => {
  let component: HauptmenuComponent;
  let fixture: ComponentFixture<HauptmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauptmenuComponent ],
      providers:[VokabelboxService, BibliothekService, GehirnService,
      {provide: LocalStorageService, useClass: LocalStorageServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
