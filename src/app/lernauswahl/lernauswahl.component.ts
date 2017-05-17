import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

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

  constructor(private router: Router,
              private bibliothekService : BibliothekService, 
              private gehirnService : GehirnService) { }

  ngOnInit() {
    this.vokabeln = this.bibliothekService.gibVoegel();

    for(let vokabel of this.vokabeln){
      vokabel.erinnerung = this.gehirnService.ladeErinnerung(vokabel.name)
    }
  }

  auswaehlen(vokabel: Vokabel) {
    vokabel.istSelektiert = ! vokabel.istSelektiert;
  }

  lernen_starten(){
    let zu_lernende_vokabeln : Vokabel[] = this.vokabeln.filter(vokabel => vokabel.istSelektiert);
    let komprimiert : string = zu_lernende_vokabeln.map(vokabel => vokabel.name).reduce((a, b) => a + "," + b )

    this.router.navigate(['/lernen', komprimiert]);
  }

}
