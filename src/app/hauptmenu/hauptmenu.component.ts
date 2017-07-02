import { Component, OnInit } from '@angular/core';

import {VokabelboxService} from '../lernen/vokabelbox.service'
import {GehirnService} from '../persistence/gehirn.service'

@Component({
  selector: 'lenrise-hauptmenu',
  templateUrl: './hauptmenu.component.html',
  styleUrls: ['./hauptmenu.component.css'],
  providers:    [ VokabelboxService]
})
export class HauptmenuComponent implements OnInit {

  anzahl_offene_wiederholungen : number = 0;

  constructor(private vokabelboxService : VokabelboxService,
              private gehirnService : GehirnService) {}

  ngOnInit() {
    this.anzahl_offene_wiederholungen = this.vokabelboxService.berechneWiederholungen(this.gehirnService.gibVoegelMitErinnerung());
  }


}
