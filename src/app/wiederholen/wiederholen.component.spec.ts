/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WiederholenComponent } from './wiederholen.component';

describe('WiederholenComponent', () => {
  let component: WiederholenComponent;
  let fixture: ComponentFixture<WiederholenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiederholenComponent ]
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
});
