import { Injectable } from '@angular/core';
import {Vokabel, BibliothekService, Lernstufe} from './bibliothek.service';
import {ArrayService} from '../util/array.service';

@Injectable()
export class VokabelboxService {

  constructor(private bibliothekService : BibliothekService,
              private arrayService : ArrayService) { }

/* 
  Lernen
*/

  erstelleLernplan(zu_lernende_vokabeln : Vokabel[]) : Lernplan {
    let anzahlVokabeln : number = zu_lernende_vokabeln.length;

    let lernplan : Lernplan = new Lernplan();
    
    let bisher_verplant : {[name: string]  : number} = {};

    //beginnen mit der ersten Vokabel
    bisher_verplant[zu_lernende_vokabeln[0].name] = 1;
    lernplan.einheiten = lernplan.einheiten.concat(new Lerneinheit(zu_lernende_vokabeln[0] , Lernart.Anschauen));

    while(anzahlVokabeln * 4 > lernplan.einheiten.length){
      let kandidat : Vokabel = zu_lernende_vokabeln[Math.floor(Math.random() * anzahlVokabeln)];
      
      if(undefined == bisher_verplant[kandidat.name]){
        lernplan.einheiten = lernplan.einheiten.concat(new Lerneinheit(kandidat , Lernart.Anschauen));
        bisher_verplant[kandidat.name] = 1;
      }else if(bisher_verplant[kandidat.name] < 4){
        lernplan.einheiten = lernplan.einheiten.concat(new Lerneinheit(kandidat , Lernart.Wiederholen));
        bisher_verplant[kandidat.name] += 1;
      }

    }

    return lernplan;
  }

  erstelleWiederholenplan(zu_wiederholende_vokabeln) : Lernplan {
    let lernplan : Lernplan = new Lernplan();

    this.arrayService.shuffle(zu_wiederholende_vokabeln);
    zu_wiederholende_vokabeln.forEach(vokabel => {
      lernplan.einheiten = lernplan.einheiten.concat(new Lerneinheit(vokabel , Lernart.Wiederholen));
    });

    return lernplan;
  }

  erstelleLernplanAnzahl(anzahlVokabeln : number) : Lernplan {
    let zu_lernende_vokabeln : Vokabel [] = this.sucheZuLernendeVokabeln(anzahlVokabeln);
    
    return this.erstelleLernplan(zu_lernende_vokabeln);
  }

  sucheZuLernendeVokabeln(anzahlVokabeln : number) : Vokabel [] {
    
    let zu_lernende_vokabeln : Vokabel [] = [];
    //dummy bis persistence
    for(let i = 0; i < anzahlVokabeln; i++){
      zu_lernende_vokabeln = zu_lernende_vokabeln.concat(this.bibliothekService.gibVoegel()[i]);
    }
    return zu_lernende_vokabeln;
  }

  /*
    Wiederholen
  */

  berechneVokabelnZumWiederholen(vokabeln : Vokabel[]) : Vokabel[] {
    return vokabeln.filter(vokabel => null != vokabel.erinnerung)
            .filter(vokabel => Lernstufe.Ganz == vokabel.erinnerung.lernstufe)
            .filter(function(vokabel) {
              let vergangeneTage : number = (new Date().getTime() - vokabel.erinnerung.letze_wiederholung.getTime()) / 1000 / 60 / 60 / 24;
              let anzahlTageBisWiederholung = Math.floor(Math.pow(1.5,vokabel.erinnerung.anzahl_richtiger_wiederholungen));
              return anzahlTageBisWiederholung <= vergangeneTage; 
      }) 
  }

  berechneWiederholungen(vokabeln : Vokabel[]) : number {
      return this.berechneVokabelnZumWiederholen(vokabeln).length;
  }

}







export class Lernplan {
  public einheiten : Lerneinheit[] = [];

  enthalteneVokabeln() : Vokabel[]{
    let vokabeln : Vokabel[] = [];

    for(let lerneinheit of this.einheiten){
      if (vokabeln.indexOf(lerneinheit.vokabel) == -1) {
        vokabeln = vokabeln.concat(lerneinheit.vokabel);
      }
    }
    return vokabeln;
  }

  log(){
    console.log("lerneinheit")
    for(let lerneinheit  of this.einheiten){
      console.log(lerneinheit.lernart + " von " + lerneinheit.vokabel.name);
    }
    console.log("")
  }
}


export class Lerneinheit {

  public vokabel : Vokabel;
  public lernart : Lernart;
  
  public constructor(vokabel : Vokabel, lernart : Lernart){
    this.lernart = lernart;
    this.vokabel = vokabel;
  }
}


export enum Lernart {
  Anschauen,
  Wiederholen
}


