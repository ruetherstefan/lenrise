import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import {Lernplan, Lerneinheit} from '../lernen/vokabelbox.service'
import {Vokabel} from '../lernen/bibliothek.service'

@Injectable()
export class GehirnService {

  constructor(private localStorageService: LocalStorageService) {}

  speichereLernen(lernplan : Lernplan){

    for(let vokabel of lernplan.enthalteneVokabeln()){
      let erinnerung = this.ladeErinnerung(vokabel.name);

      if(null == erinnerung){
        erinnerung = new Erinnerung(vokabel.name, new Date());
      }else{
        erinnerung.lernstufe = Lernstufe.Ganz;
      }
      
      this.localStorageService.set(vokabel.name, erinnerung);
    }
  }

  ladeErinnerung(name : string) : Erinnerung{
    let loaded = this.localStorageService.get(name);
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
    erinnerung.lernstufe = object.lernstufe;
    erinnerung.anzahl_richtiger_wiederholungen = object.anzahl_richtiger_wiederholungen;

    return erinnerung;
  }

}

export enum Lernstufe {
  Halb,
  Ganz
}