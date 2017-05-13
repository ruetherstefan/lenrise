import { Component, OnInit } from '@angular/core';
import {Vokabel} from '../lernen/bibliothek.service'
import {VokabelboxService, Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service'

@Component({
  selector: 'lenrise-lernen',
  templateUrl: './lernen.component.html',
  styleUrls: ['./lernen.component.css'],
  providers:    [ VokabelboxService ]
})
export class LernenComponent implements OnInit {

  //constructor(private bibliothekService : BibliothekService) {}
  constructor(private vokabelboxService : VokabelboxService) {}

  audio : HTMLAudioElement;
  lernplan : Lernplan;
  aktuelle_lerneinheit : number = 0;

  warRichtig : boolean = false;
  warFalsch : boolean = false;
  vokabel_eingabe : string = "";

  ngOnInit() {

    this.lernplan = this.vokabelboxService.erstelleLernplan(5);
    let lern : Vokabel = this.lernplan.einheiten[0].vokabel;
    

    this.audio = new Audio();
    this.spieleAktuelleVokabel();
  }

  gibAktuelleLerneinheit() : Lerneinheit {
    return this.lernplan.einheiten[this.aktuelle_lerneinheit]; 
  }

  gibAktuelleVokabel() : Vokabel {
    return this.gibAktuelleLerneinheit().vokabel;
  }

  istInWiederholenModus() : boolean{
    return this.gibAktuelleLerneinheit().lernart == Lernart.Wiederholen;
  }

  istInLernenModus() : boolean{
    return ! this.istInWiederholenModus();
  }

  weiter() {
    if(Lernart.Wiederholen == this.gibAktuelleLerneinheit().lernart){
      if(this.vokabel_eingabe == this.gibAktuelleVokabel().name){
        this.warRichtig = true;
        setTimeout(() => {this.warRichtig = false}, 2000);
      }else{
        this.warFalsch = true;
        setTimeout(() => {this.warFalsch = false}, 2000);
        
        this.lernplan.einheiten = this.lernplan.einheiten.concat(this.gibAktuelleLerneinheit()); 
      }

    }

    this.aktuelle_lerneinheit += 1;
    this.spieleAktuelleVokabel();
  }

  spieleAktuelleVokabel() {
    this.audio.src = this.gibAktuelleLerneinheit().vokabel.adresse();
    this.audio.load();
    this.audio.play(); 
  }

  musicPlay() {
    this.audio.play();
  }

  musicPause() {
    this.audio.pause();
  }

}
