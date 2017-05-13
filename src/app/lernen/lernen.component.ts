import { Component, OnInit } from '@angular/core';
import {Vokabel, BibliothekService} from '../lernen/bibliothek.service'

@Component({
  selector: 'lenrise-lernen',
  templateUrl: './lernen.component.html',
  styleUrls: ['./lernen.component.css'],
  providers:    [ BibliothekService ]
})
export class LernenComponent implements OnInit {

  constructor(private bibliothekService : BibliothekService) {}

  audio : HTMLAudioElement;

  ngOnInit() {

    //let lern = this.bibliothekService.gibVoegel()[1];
    let lern = new Vokabel("Stockente","01 Feldlerche.m4a");
    

    this.audio = new Audio();
//    audio.src = "../assets/letitbe.mp3";
    this.audio.src = lern.adresse();
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
