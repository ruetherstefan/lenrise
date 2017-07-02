import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HostListener } from '@angular/core'

import {Vokabel, BibliothekService} from '../lernen/bibliothek.service'
import {VokabelboxService, Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service'
import {GehirnService} from '../persistence/gehirn.service'

@Component({
  selector: 'lenrise-wiederholen',
  templateUrl: './wiederholen.component.html',
  styleUrls: ['./wiederholen.component.css'],
  providers:    [ VokabelboxService, GehirnService ]
})
export class WiederholenComponent implements OnInit {

  constructor(private vokabelboxService : VokabelboxService,
              private gehirnService : GehirnService,
              private bibliothekService : BibliothekService,
              private router: Router) {}

  audio : HTMLAudioElement;
  lernplan : Lernplan;
  aktuelle_lerneinheit : number = 0;

  warRichtig : boolean = false;
  warFalsch : boolean = false;
  vokabel_eingabe : string = "";

  ngOnInit() {

    let vokabelZumWiederholen = this.vokabelboxService.berechneVokabelnZumWiederholen(this.gehirnService.gibVoegelMitErinnerung());
    this.lernplan = this.vokabelboxService.erstelleWiederholenplan(vokabelZumWiederholen);

    this.audio = new Audio();
    this.spieleAktuelleVokabel();
    
  }

 @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    //Enter
    if(13 == event.keyCode){
      this.weiter();
    }
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
        this.gehirnService.speichereWiederholen(this.gibAktuelleLerneinheit().vokabel, true);

      }else{
        this.warFalsch = true;
        setTimeout(() => {this.warFalsch = false}, 2000);

        let aktuelle_lerneinheit_zum_anschauen : Lerneinheit =  new Lerneinheit(this.gibAktuelleLerneinheit().vokabel, Lernart.Anschauen)
        this.lernplan.einheiten.splice(this.aktuelle_lerneinheit + 1, 0, aktuelle_lerneinheit_zum_anschauen);
        this.gehirnService.speichereWiederholen(this.gibAktuelleLerneinheit().vokabel, false);
    }

    }
    this.aktuelle_lerneinheit += 1;
    if(this.aktuelle_lerneinheit >= this.lernplan.einheiten.length){
        this.audio.pause();
        this.router.navigateByUrl("/");
        return;
    }

    this.vokabel_eingabe = "";
    this.spieleAktuelleVokabel();
  }

  spieleAktuelleVokabel() {
    this.audio.src = this.gibAktuelleLerneinheit().vokabel.adresse();
    this.audio.load();
    this.audio.loop = true;
    this.audio.play(); 

    this.audio.onloadedmetadata = function() {
      let audio : HTMLAudioElement = this as HTMLAudioElement;

      let start_time : number = Math.floor(Math.random() * audio.duration * 2/3);
      audio.currentTime = start_time;

    };
  }

  musicPlay() {
    this.audio.play();
  }

  musicPause() {
    this.audio.pause();
  }

}
