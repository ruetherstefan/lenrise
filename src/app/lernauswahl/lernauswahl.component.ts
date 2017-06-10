import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import {Vokabel, Erinnerung, BibliothekService} from '../lernen/bibliothek.service';
import {GehirnService} from '../persistence/gehirn.service'

@Component({
  selector: 'lenrise-lernauswahl',
  templateUrl: './lernauswahl.component.html',
  styleUrls: ['./lernauswahl.component.css']
})
export class LernauswahlComponent implements OnInit {

  private vokabeln : Vokabel[];

  constructor(private router: Router, 
              private gehirnService : GehirnService) { }

  ngOnInit() {
    this.vokabeln = this.gehirnService.gibVoegelMitErinnerung();
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
