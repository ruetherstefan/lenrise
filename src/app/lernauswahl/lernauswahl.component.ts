import { Component, OnInit } from '@angular/core';

import {Vokabel, BibliothekService} from '../lernen/bibliothek.service';
import {Erinnerung} from '../persistence/gehirn.service'
import {GehirnService} from '../persistence/gehirn.service'

@Component({
  selector: 'lenrise-lernauswahl',
  templateUrl: './lernauswahl.component.html',
  styleUrls: ['./lernauswahl.component.css']
})
export class LernauswahlComponent implements OnInit {

  private vokabeln : Vokabel[];

  constructor(private bibliothekService : BibliothekService, 
              private gehirnService : GehirnService) { }

  ngOnInit() {
    this.vokabeln = this.bibliothekService.gibVoegel();

    for(let vokabel of this.vokabeln){
      vokabel.erinnerung = this.gehirnService.ladeErinnerung(vokabel.name)
    }
  }

}
