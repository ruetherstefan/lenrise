/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VokabelboxService, Lernplan, Lernart } from './vokabelbox.service';
import { BibliothekService, Vokabel} from './bibliothek.service'

describe('VokabelboxService', () => {

  let underTest : VokabelboxService;
  let bibliothekService : BibliothekService;

  let voegel = [
      new Vokabel("Blaumeise","01 Blaumeise.mp3"),
      new Vokabel("Kohlmeise","02 Kohlmeise.mp3"),
      new Vokabel("Tannenmeise","03 Tannenmeise.mp3"),
      new Vokabel("Sumpfmeise","04 Sumpfmeise.mp3"),
      new Vokabel("Haubenmeise","05 Haubenmeise.mp3"),
      new Vokabel("Schwanzmeise","06 Schwanzmeise.mp3"),
      new Vokabel("Kleiber","07 Kleiber.mp3")
      ];

  beforeEach(() => {
    this.bibliothekService = {gibVoegel : () => voegel}

    this.underTest = new VokabelboxService(this.bibliothekService);
  });

  it('should Lernplan berechnen', () => {
    let lernplan : Lernplan = this.underTest.erstelleLernplanAnzahl(5);
    expect(lernplan).toBeTruthy();
  });

  it('should verschachtelten Lernplan berechnen - Anzahl', () => {
    let lernplan : Lernplan = this.underTest.erstelleLernplanAnzahl(2);
    expect(lernplan.einheiten.length).toEqual(8);
  });

  it('should verschachtelten Lernplan berechnen - beginnt mit Anschauen', () => {
    let lernplan : Lernplan = this.underTest.erstelleLernplanAnzahl(2);

    expect(lernplan.einheiten[0].lernart).toEqual(Lernart.Anschauen);
    expect(lernplan.einheiten[0].vokabel).toEqual(voegel[0]); //Bibliothek Service mocken
  });


  it('should Set der vokabeln geben - Lernplan', () => {
    let lernplan : Lernplan = this.underTest.erstelleLernplanAnzahl(2);

    expect(lernplan.enthalteneVokabeln().length).toEqual(2);
  });
});