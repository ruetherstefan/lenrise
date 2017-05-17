import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import {Lernplan, Lerneinheit} from '../lernen/vokabelbox.service'
import {Vokabel} from '../lernen/bibliothek.service'

@Injectable()
export class GehirnService {

  constructor(private localStorageService: LocalStorageService) {}

  speichereLernen(lernplan : Lernplan){

    for(let vokabel of lernplan.enthalteneVokabeln()){
      let erinnerung : Erinnerung = new Erinnerung(vokabel.name, new Date());
      
      this.localStorageService.set(vokabel.name, erinnerung);
    }

    //console.log(Erinnerung.parse(this.localStorageService.get("erinnerungen")));
  }

  ladeErinnerung(name : string) : Erinnerung{
    let loaded = this.localStorageService.get(name);
    console.log(loaded)
    if(undefined != loaded){
      return Erinnerung.parse(loaded);
    }

    return null;
  }

}

export class Erinnerung {

  lernstufe : Lernstufe = Lernstufe.Halb;
  anzahl_richtiger_wiederholungen = 1;

  constructor(public vokabelname : string, public letze_wiederholung : Date){}
  
  static parse(object) : Erinnerung{
    let erinnerung : Erinnerung = new Erinnerung(object.vokabelname, object.letze_wiederholung);

    return erinnerung;
  }

}

export enum Lernstufe {
  Halb,
  Ganz
}