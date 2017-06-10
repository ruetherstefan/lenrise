import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Vokabel, BibliothekService} from '../lernen/bibliothek.service'
import {VokabelboxService, Lernplan, Lerneinheit, Lernart} from '../lernen/vokabelbox.service'
import {GehirnService} from '../persistence/gehirn.service'

@Component({
  selector: 'lenrise-lernen',
  templateUrl: './lernen.component.html',
  styleUrls: ['./lernen.component.css'],
  providers:    [ VokabelboxService, GehirnService ]
})
export class LernenComponent implements OnInit {

  constructor(private vokabelboxService : VokabelboxService,
              private gehirnService : GehirnService,
              private bibliothekService : BibliothekService,
              private router: Router,
              private route: ActivatedRoute) {}

  audio : HTMLAudioElement;
  lernplan : Lernplan;
  aktuelle_lerneinheit : number = 0;

  warRichtig : boolean = false;
  warFalsch : boolean = false;
  vokabel_eingabe : string = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
      let param : string = params['vokabeln'];
      let vokabeln_array = param.split(",").map(name => {
        return this.bibliothekService.gibVoegel().filter(vokabel => vokabel.name == name)
      });

      let vokabeln : Vokabel[] = [].concat.apply([], vokabeln_array);

      this.lernplan = this.vokabelboxService.erstelleLernplan(vokabeln);

      this.audio = new Audio();
      this.spieleAktuelleVokabel();
    });

    
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
        let aktuelle_lerneinheit_zum_anschauen : Lerneinheit =  new Lerneinheit(this.gibAktuelleLerneinheit().vokabel, Lernart.Anschauen)
        this.lernplan.einheiten.splice(this.aktuelle_lerneinheit + 1, 0, aktuelle_lerneinheit_zum_anschauen);
      }

    }
    this.aktuelle_lerneinheit += 1;
    if(this.aktuelle_lerneinheit >= this.lernplan.einheiten.length){
        this.gehirnService.speichereLernen(this.lernplan);
        this.router.navigateByUrl("/");
        return;
    }

    this.vokabel_eingabe = "";
    this.spieleAktuelleVokabel();
  }

  spieleAktuelleVokabel() {
    this.audio.src = this.gibAktuelleLerneinheit().vokabel.adresse();
    this.audio.load();
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
