/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VokabelboxService, Lernplan, Lernart } from './vokabelbox.service';
import { BibliothekService, Vokabel, Erinnerung, Lernstufe} from './bibliothek.service'

describe('VokabelboxService', () => {

  let underTest : VokabelboxService;
  let bibliothekService : BibliothekService;

  let voegel = [
      new Vokabel("Blaumeise", ["01 Blaumeise.mp3"]),
      new Vokabel("Kohlmeise", ["02 Kohlmeise.mp3"]),
      new Vokabel("Tannenmeise", ["03 Tannenmeise.mp3"]),
      new Vokabel("Sumpfmeise", ["04 Sumpfmeise.mp3"]),
      new Vokabel("Haubenmeise", ["05 Haubenmeise.mp3"]),
      new Vokabel("Schwanzmeise", ["06 Schwanzmeise.mp3"]),
      new Vokabel("Kleiber", ["07 Kleiber.mp3"])
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

  it('vokabeln erstmalig nach einem Tag wiederholen - ein Tag vergangen', () => {
    let vokabel : Vokabel  = new Vokabel("name", ["pfad"])
    vokabel.erinnerung = new Erinnerung("name", new Date())
    vokabel.erinnerung.letze_wiederholung = new Date(2017,1,1,12);
    vokabel.erinnerung.lernstufe = Lernstufe.Ganz;
    mockNewDate(new Date(2017, 1, 2, 13))

    let anzahl_wiederholungen : number = this.underTest.berechneWiederholungen([vokabel]);

    expect(anzahl_wiederholungen).toEqual(1);
  });

  it('vokabeln erstmalig nach einem Tag wiederholen - zu früh', () => {
    let vokabel : Vokabel  = new Vokabel("name", ["pfad"])
    vokabel.erinnerung = new Erinnerung("name", new Date())
    vokabel.erinnerung.letze_wiederholung = new Date(2017,1,1,12);
    vokabel.erinnerung.lernstufe = Lernstufe.Ganz;
    mockNewDate(new Date(2017, 1, 2, 11))

    let anzahl_wiederholungen : number = this.underTest.berechneWiederholungen([vokabel]);

    expect(anzahl_wiederholungen).toEqual(0);
  });

  it('vokabeln ohne Erinnerung nicht wiederholen', () => {
    let vokabel : Vokabel  = new Vokabel("name", ["pfad"])
    
    let anzahl_wiederholungen : number = this.underTest.berechneWiederholungen([vokabel]);

    expect(anzahl_wiederholungen).toEqual(0);
  });

  it('vokabeln mit halber Lernstufe nicht wiederholen', () => {
    let vokabel : Vokabel  = new Vokabel("name", ["pfad"])
    vokabel.erinnerung = new Erinnerung("name", new Date())
    
    let anzahl_wiederholungen : number = this.underTest.berechneWiederholungen([vokabel]);

    expect(anzahl_wiederholungen).toEqual(0);
  });

  function mockNewDate(heute : Date){
    spyOn(window, "Date").and.callFake(function(){
      return heute;
    });
  }

  it('vokabeln mit halber Lernstufe nicht wiederholen', () => {
    let vokabel : Vokabel  = new Vokabel("name", ["pfad"])
    vokabel.erinnerung = new Erinnerung("name", new Date())
    
    let anzahl_wiederholungen : number = this.underTest.berechneWiederholungen([vokabel]);

    expect(anzahl_wiederholungen).toEqual(0);
  });

  /*it('test', () => {
    for(let i = 1; i<16 ; i++){
      console.log(i + " : "+ Math.floor(Math.pow(1.5,i)))
    }

  });*/

});