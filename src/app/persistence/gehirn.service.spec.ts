/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

import { GehirnService, Erinnerung, Lernstufe } from './gehirn.service';
import {Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service'
import {Vokabel} from '../lernen/bibliothek.service'

describe('GehirnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GehirnService,
        {provide: LocalStorageService, useClass: LocalStorageServiceStub }],
      imports: []
    });
  });

  it('should ...', inject([GehirnService], (service: GehirnService) => {
    expect(service).toBeTruthy();
  }));


  it('should bei neu lernen erinnerung anlegen', 
  inject([GehirnService, LocalStorageService], 
  (service: GehirnService, localStorageService : LocalStorageService) => {
  
    const spy = spyOn(localStorageService, 'set');
    
    let lernplan : Lernplan = new Lernplan();
    lernplan.einheiten = [new Lerneinheit(new Vokabel("name","pf"), Lernart.Anschauen)];
    
    service.speichereLernen(lernplan);

    let erinnerung : Erinnerung = new Erinnerung("name", new Date());
    const navArgs = spy.calls.first().args[1];

    expect(navArgs.letze_wiederholung.getDay()).toEqual(erinnerung.letze_wiederholung.getDay(), 'gleicher Tag, nicht gleicher timestamp');
    
    expect(navArgs.anzahl_richtiger_wiederholungen).toEqual(erinnerung.anzahl_richtiger_wiederholungen);
    expect(navArgs.lernstufe).toEqual(erinnerung.lernstufe);
  }));

  it('should beim zweiten mal lernen lernstufe erhöhen', 
  inject([GehirnService, LocalStorageService], 
  (service: GehirnService, localStorageService : LocalStorageService) => {
  
    const spy = spyOn(localStorageService, 'set');
    
    let lernplan : Lernplan = new Lernplan();
    lernplan.einheiten = [new Lerneinheit(new Vokabel("name","pf"), Lernart.Anschauen)];

    let erinnerung : Erinnerung = new Erinnerung("name", new Date());
    let localStorageServiceStub : any = localStorageService;
    localStorageServiceStub.fake_get(erinnerung)    


    service.speichereLernen(lernplan);


    const navArgs = spy.calls.first().args[1];

    expect(navArgs.lernstufe).toEqual(Lernstufe.Ganz);
  }));

});


export class LocalStorageServiceStub{
  private get_return = null;
  
  set(key, val) : boolean{
      //console.log("key " + key + " val " + val);
      return true;
  }

  get(key) : string{
    return this.get_return;
  }

  fake_get(get_return){
    this.get_return = get_return;
  }
}