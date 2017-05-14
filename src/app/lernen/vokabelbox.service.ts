import { Injectable } from '@angular/core';
import {Vokabel, BibliothekService} from './bibliothek.service';

@Injectable()
export class VokabelboxService {

  constructor(private bibliothekService : BibliothekService) { }

  erstelleLernplan(anzahlVokabeln : number) : Lernplan {
    let lernplan : Lernplan = new Lernplan();
    
    let zu_lernende_vokabeln : Vokabel [] = this.sucheZuLernendeVokabeln(anzahlVokabeln);
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

    //lernplan.log()
    return lernplan;
  }

  sucheZuLernendeVokabeln(anzahlVokabeln : number) : Vokabel [] {
    
    let zu_lernende_vokabeln : Vokabel [] = [];
    //dummy bis persistence
    for(let i = 0; i < anzahlVokabeln; i++){
      zu_lernende_vokabeln = zu_lernende_vokabeln.concat(this.bibliothekService.gibVoegel()[i]);
    }
    return zu_lernende_vokabeln;
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


