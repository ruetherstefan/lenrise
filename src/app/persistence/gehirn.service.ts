import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import {Lernplan, Lerneinheit} from '../lernen/vokabelbox.service'
import {Vokabel, Erinnerung, Lernstufe, BibliothekService} from '../lernen/bibliothek.service'

@Injectable()
export class GehirnService {

  constructor(private localStorageService: LocalStorageService, 
              private bibliothekService : BibliothekService) {}

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

  gibVoegelMitErinnerung() : Vokabel[]{
    let vokabeln : Vokabel[] = this.bibliothekService.gibVoegel();

    for(let vokabel of vokabeln){
      vokabel.erinnerung = this.ladeErinnerung(vokabel.name)
    }
    return vokabeln;
  }

}