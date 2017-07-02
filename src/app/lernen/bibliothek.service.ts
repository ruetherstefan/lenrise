import { Injectable } from '@angular/core';

@Injectable()
export class BibliothekService {

  constructor() { }

  gibVoegel() : Vokabel[] {
    return [
      new Vokabel("Blaumeise",['01 Blaumeise.mp3', '02 Blaumeise.m4a']),
      new Vokabel("Feldlerche",['01 Feldlerche.m4a', '72 Feldlerche.m4a']),
      new Vokabel("Kohlmeise",['01 Kohlmeise.m4a', '02 Kohlmeise.mp3']),
      new Vokabel("Heidelerche",['02 Heidelerche.m4a']),
      new Vokabel("Haubenlerche",['03 Haubenlerche.m4a']),
      new Vokabel("Sumpfmeise",['03 Sumpfmeise.m4a', '04 Sumpfmeise.mp3']),
      new Vokabel("Tannenmeise",['03 Tannenmeise.mp3', '05 Tannenmeise.m4a']),
      new Vokabel("Weidenmeise",['04 Weidenmeise.m4a']),
      new Vokabel("Wiesenpieper",['04 Wiesenpieper.m4a']),
      new Vokabel("Brachpieper",['05 Brachpieper.m4a']),
      new Vokabel("Haubenmeise",['05 Haubenmeise.mp3', '06 Haubenmeise.m4a']),
      new Vokabel("Goldammer",['06 Goldammer.m4a', '39 Goldammer.mp3']),
      new Vokabel("Schwanzmeise",['06 Schwanzmeise.mp3', '07 Schwanzmeise.m4a']),
      new Vokabel("Grauammer",['07 Grauammer.m4a']),
      new Vokabel("Kleiber",['07 Kleiber.mp3', '08 Kleiber.m4a']),
      new Vokabel("Gartenbaumläufer",['08 Gartenbaumläufer.mp3', '09 Gartenbaumläufer.m4a']),
      new Vokabel("Rohrammer",['08 Rohrammer.m4a']),
      new Vokabel("Ortolan",['09 Ortolan.m4a']),
      new Vokabel("Zaunkönig",['09 Zaunkönig.mp3', '13 Zaunkönig.m4a']),
      new Vokabel("Heckenbraunelle",['10 Heckenbraunelle.mp3', '47 Heckenbraunelle.m4a']),
      new Vokabel("Waldbaumläufer",['10 Waldbaumläufer.m4a']),
      new Vokabel("Zaunammer",['10 Zaunammer.m4a']),
      new Vokabel("Bachstelze",['11 Bachstelze.m4a', '28 Bachstelze.mp3']),
      new Vokabel("Wintergoldhähnchen",['11 Wintergoldhähnchen.m4a', '17 Wintergoldhähnchen.mp3']),
      new Vokabel("Zilpzalp",['11 Zilpzalp.mp3', '58 Zilpzalp.m4a']),
      new Vokabel("Fitis",['12 Fitis.mp3', '59 Fitis.m4a']),
      new Vokabel("Rotkelchen",['12 Rotkelchen.m4a']),
      new Vokabel("Schafstelze",['12 Schafstelze.m4a']),
      new Vokabel("Beutelmeise",['13 Beutelmeise.m4a']),
      new Vokabel("Gelbspötter",['13 Gelbspötter.mp3', '63 Gelbspötter.m4a']),
      new Vokabel("Bartmeise",['14 Bartmeise.m4a']),
      new Vokabel("Mönchsgrasmücke",['14 Mönchsgrasmücke.mp3', '53 Mönchsgrasmücke.m4a']),
      new Vokabel("Wasseramsel",['14 Wasseramsel.m4a']),
      new Vokabel("Gartengrasmücke",['15 Gartengrasmücke.mp3', '54 Gartengrasmücke.m4a']),
      new Vokabel("Gebirgsstelze",['15 Gebirgsstelze.m4a']),
      new Vokabel("Uferschwalbe",['15 Uferschwalbe.m4a']),
      new Vokabel("Braunkehlchen",['16 Braunkehlchen.m4a']),
      new Vokabel("Buchfink",['16 Buchfink.m4a', '33 Buchfink.mp3', '42 Buchfink.m4a']),
      new Vokabel("Klappergrasmücke",['16 Klappergrasmücke.mp3', '55 Klappergrasmücke.m4a']),
      new Vokabel("Gimpel",['17 Gimpel.m4a', '36 Gimpel.mp3']),
      new Vokabel("Schwarzkehlchen",['17 Schwarzkehlchen.m4a']),
      new Vokabel("Grünfink",['18 Grünfink.m4a', '34 Grünfink.mp3', '43 Grünfink.m4a']),
      new Vokabel("Sommergoldhähnchen",['18 Sommergoldhähnchen.mp3', '49 Sommergoldhähnchen.m4a']),
      new Vokabel("Steinschätzer",['18 Steinschätzer.m4a']),
      new Vokabel("Bergfink",['19 Bergfink.m4a']),
      new Vokabel("Grauschnäpper",['19 Grauschnäpper.mp3', '78 Grauschnäpper.m4a']),
      new Vokabel("Neuntöter",['19 Neuntöter.m4a']),
      new Vokabel("Kernbeißer",['20 Kernbeißer.m4a']),
      new Vokabel("Raubwürger",['20 Raubwürger.m4a']),
      new Vokabel("Trauerschnäpper",['20 Trauerschnäpper.mp3', '75 Trauerschnäpper.m4a']),
      new Vokabel("Erlenzeisig",['21 Erlenzeisig.m4a']),
      new Vokabel("Rotkehlchen",['21 Rotkehlchen.mp3']),
      new Vokabel("Rotkopfwürger",['21 Rotkopfwürger.m4a']),
      new Vokabel("Fichtenkreuzschnabel",['22 Fichtenkreuzschnabel.m4a']),
      new Vokabel("Hausrotschwanz",['22 Hausrotschwanz.mp3', '48 Hausrotschwanz.m4a']),
      new Vokabel("Rebhuhn",['22 Rebhuhn.m4a']),
      new Vokabel("Eichelhäher",['23 Eichelhäher.m4a', '47 Eichelhäher.mp3']),
      new Vokabel("Gartenrotschwanz",['23 Gartenrotschwanz.mp3', '74 Gartenrotschwanz.m4a']),
      new Vokabel("Jagdfasan",['23 Jagdfasan.m4a']),
      new Vokabel("Elster",['24 Elster.m4a', '46 Elster.mp3']),
      new Vokabel("Girlitz",['24 Girlitz.mp3', '82 Girlitz.m4a']),
      new Vokabel("Wachtel",['24 Wachtel.m4a', '79 Wachtel.m4a']),
      new Vokabel("Aaskrähe",['25 Aaskrähe.m4a']),
      new Vokabel("Mauersegler",['25 Mauersegler.mp3', '87 Mauersegler.m4a']),
      new Vokabel("Wachtelkönig",['25 Wachtelkönig.m4a', '69 Wachtelkönig.m4a']),
      new Vokabel("Rauchschwalbe",['26 Rauchschwalbe.mp3', '85 Rauchschwalbe.m4a']),
      new Vokabel("Ringdrossel",['26 Ringdrossel.m4a']),
      new Vokabel("Saatkrähe",['26 Saatkrähe.m4a']),
      new Vokabel("Alpenbraunelle",['27 Alpenbraunelle.m4a']),
      new Vokabel("Kolkrabe",['27 Kolkrabe.m4a']),
      new Vokabel("Mehlschwalbe",['27 Mehlschwalbe.mp3', '86 Mehlschwalbe.m4a']),
      new Vokabel("Bergpieper",['28 Bergpieper.m4a']),
      new Vokabel("Dohle",['28 Dohle.m4a']),
      new Vokabel("Buntspecht",['29 Buntspecht.m4a', '45 Buntspecht.mp3']),
      new Vokabel("Nachtigal",['29 Nachtigal.mp3', '79 Nachtigal.m4a']),
      new Vokabel("Schneesperling",['29 Schneesperling.m4a']),
      new Vokabel("Kleinspecht",['30 Kleinspecht.m4a']),
      new Vokabel("Star",['30 Star.mp3', '39 Star.m4a']),
      new Vokabel("Zitronengirlitz",['30 Zitronengirlitz.m4a']),
      new Vokabel("Alpendohle",['31 Alpendohle.m4a']),
      new Vokabel("Haussperling",['31 Haussperling.mp3', '40 Haussperling.m4a']),
      new Vokabel("Mittelspecht",['31 Mittelspecht.m4a']),
      new Vokabel("Feldsperling",['32 Feldsperling.mp3', '41 Feldsperling.m4a']),
      new Vokabel("Grauspecht",['32 Grauspecht.m4a']),
      new Vokabel("Tannenhäher",['32 Tannenhäher.m4a']),
      new Vokabel("Alpensegler",['33 Alpensegler.m4a']),
      new Vokabel("Grünspecht",['33 Grünspecht.m4a', '49 Grünspecht.mp3']),
      new Vokabel("Felsenschwalbe",['34 Felsenschwalbe.m4a']),
      new Vokabel("Schwarzspecht",['34 Schwarzspecht.m4a']),
      new Vokabel("Amsel",['35 Amsel.m4a', '40 Amsel.mp3']),
      new Vokabel("Bluthänfling",['35 Bluthänfling.mp3', '45 Bluthänfling.m4a']),
      new Vokabel("Mauerläufer",['35 Mauerläufer.m4a']),
      new Vokabel("Singdrossel",['36 Singdrossel.m4a', '41 Singdrossel.mp3', '70 Singdrossel.m4a']),
      new Vokabel("Zippammer",['36 Zippammer.m4a']),
      new Vokabel("Dreizehenspecht",['37 Dreizehenspecht.m4a']),
      new Vokabel("Misteldrossel",['37 Misteldrossel.m4a']),
      new Vokabel("Stieglitz",['37 Stieglitz.mp3', '44 Stieglitz.m4a']),
      new Vokabel("Kernbeisser",['38 Kernbeisser.mp3']),
      new Vokabel("Wacholderdrossel",['38 Wacholderdrossel.m4a']),
      new Vokabel("Weissrückenspecht",['38 Weissrückenspecht.m4a']),
      new Vokabel("Sperlingskautz",['39 Sperlingskautz.m4a']),
      new Vokabel("Birkhuhn",['40 Birkhuhn.m4a']),
      new Vokabel("Auerhuhn",['41 Auerhuhn.m4a']),
      new Vokabel("Haselhuhn",['42 Haselhuhn.m4a']),
      new Vokabel("Ringeltaube",['42 Ringeltaube.mp3', '51 Ringeltaube.m4a']),
      new Vokabel("Alpenschneehuhn",['43 Alpenschneehuhn.m4a']),
      new Vokabel("Türkentaube",['43 Türkentaube.mp3', '50 Türkentaube.m4a']),
      new Vokabel("Steinhuhn",['44 Steinhuhn.m4a']),
      new Vokabel("Waldohreule",['44 Waldohreule.mp3']),
      new Vokabel("Blaukehlchen",['45 Blaukehlchen.m4a']),
      new Vokabel("Birkenzeisig",['46 Birkenzeisig.m4a']),
      new Vokabel("Haubentaucher",['46 Haubentaucher.m4a']),
      new Vokabel("Zwergtaucher",['47 Zwergtaucher.m4a']),
      new Vokabel("Rabenkrähe",['48 Rabenkrähe.mp3']),
      new Vokabel("Rohrdommel",['48 Rohrdommel.m4a']),
      new Vokabel("Zwergdommel",['49 Zwergdommel.m4a']),
      new Vokabel("Nachtreiher",['50 Nachtreiher.m4a']),
      new Vokabel("Stockente",['50 Stockente.mp3', '53 Stockente.m4a']),
      new Vokabel("Graureiher",['51 Graureiher.m4a']),
      new Vokabel("Graugans",['52 Graugans.m4a', '82 Graugans.m4a']),
      new Vokabel("Waldschnepfe",['52 Waldschnepfe.m4a']),
      new Vokabel("Krickente",['54 Krickente.m4a']),
      new Vokabel("Knäkente",['55 Knäkente.m4a']),
      new Vokabel("Dorngrasmücke",['56 Dorngrasmücke.m4a']),
      new Vokabel("Pfeifente",['56 Pfeifente.m4a', '81 Pfeifente.m4a']),
      new Vokabel("Kiebitz",['57 Kiebitz.m4a']),
      new Vokabel("Sperbergrasmücke",['57 Sperbergrasmücke.m4a']),
      new Vokabel("Flussregenpfeifer",['58 Flussregenpfeifer.m4a']),
      new Vokabel("Grosser Brachvogel",['59 Grosser Brachvogel.m4a', '76 Grosser Brachvogel.m4a']),
      new Vokabel("Bekassine",['60 Bekassine.m4a']),
      new Vokabel("Waldlaubsänger",['60 Waldlaubsänger.m4a']),
      new Vokabel("Berglaubsänger",['61 Berglaubsänger.m4a']),
      new Vokabel("Sumpohreule",['61 Sumpohreule.m4a']),
      new Vokabel("Grünlaubsänger",['62 Grünlaubsänger.m4a']),
      new Vokabel("Kranich",['62 Kranich.m4a', '85 Kranich.m4a']),
      new Vokabel("Teichhuhn",['63 Teichhuhn.m4a']),
      new Vokabel("Blässhuhn",['64 Blässhuhn.m4a']),
      new Vokabel("Orpheusspötter",['64 Orpheusspötter.m4a']),
      new Vokabel("Drosselrohrsänger",['65 Drosselrohrsänger.m4a']),
      new Vokabel("Wasserralle",['65 Wasserralle.m4a']),
      new Vokabel("Teichrohrsänger",['66 Teichrohrsänger.m4a']),
      new Vokabel("Tüpfelsumpfhuhn",['66 Tüpfelsumpfhuhn.m4a']),
      new Vokabel("Kleines Sumpfhuhn",['67 Kleines Sumpfhuhn.m4a']),
      new Vokabel("Sumpfrohrsänger",['67 Sumpfrohrsänger.m4a']),
      new Vokabel("Schilfrohrsänger",['68 Schilfrohrsänger.m4a']),
      new Vokabel("Zwergsumpfhuhn",['68 Zwergsumpfhuhn.m4a']),
      new Vokabel("Seggenrohrsänger",['69 Seggenrohrsänger.m4a']),
      new Vokabel("Mariskenrohrsänger",['70 Mariskenrohrsänger.m4a']),
      new Vokabel("Feldschwirl",['71 Feldschwirl.m4a']),
      new Vokabel("Rohrschwirl",['72 Rohrschwirl.m4a']),
      new Vokabel("Flussuferläufer",['73 Flussuferläufer.m4a']),
      new Vokabel("Schlagschwirl",['73 Schlagschwirl.m4a']),
      new Vokabel("Waldwasserläufer",['74 Waldwasserläufer.m4a']),
      new Vokabel("Grünschenkel",['75 Grünschenkel.m4a']),
      new Vokabel("Halsbandschnäpper",['76 Halsbandschnäpper.m4a']),
      new Vokabel("Alpenstrandläufer",['77 Alpenstrandläufer.m4a']),
      new Vokabel("Zwergschnäpper",['77 Zwergschnäpper.m4a']),
      new Vokabel("Goldregenpfeifer",['78 Goldregenpfeifer.m4a']),
      new Vokabel("Sprosser",['80 Sprosser.m4a']),
      new Vokabel("Baumkieper",['81 Baumkieper.m4a']),
      new Vokabel("Karmingimpel",['83 Karmingimpel.m4a']),
      new Vokabel("Saatgans",['83 Saatgans.m4a']),
      new Vokabel("Blässgans",['84 Blässgans.m4a']),
      new Vokabel("Pirol",['84 Pirol.m4a']),
      new Vokabel("Hohltaube",['88 Hohltaube.m4a']),
      new Vokabel("Turteltaube",['89 Turteltaube.m4a']),
      new Vokabel("Wendehals",['90 Wendehals.m4a']),
      new Vokabel("Kuckkuck",['91 Kuckkuck.m4a']),
      new Vokabel("Ziegenmelker",['92 Ziegenmelker.m4a'])
    ];
  }
}

export class Vokabel {

  name : string;
  pfad : string[];
  erinnerung : Erinnerung;
  istSelektiert : boolean = false;

constructor(name : string, pfad : string[]) {
        this.name = name;
        this.pfad = pfad;
    }

  adresse () : string{
    let ausgewaehltesStueck : number =  Math.floor(Math.random() * this.pfad.length)
    return "../assets/" + this.pfad[ausgewaehltesStueck];
  }

  istGelernt() : boolean {
    if(undefined == this.erinnerung){
      return false;
    }
    return Lernstufe.Ganz == this.erinnerung.lernstufe; 
  }

  istHalbGelernt() : boolean {
    if(undefined == this.erinnerung){
      return false;
    }
    return Lernstufe.Halb == this.erinnerung.lernstufe; 
  }

}

export class Erinnerung {

  lernstufe : Lernstufe = Lernstufe.Halb;
  anzahl_richtiger_wiederholungen = 1;

  constructor(public vokabelname : string, public letze_wiederholung : Date){}
  
  static parse(object) : Erinnerung{
    let erinnerung : Erinnerung = new Erinnerung(object.vokabelname,  new Date(object.letze_wiederholung));
    erinnerung.lernstufe = object.lernstufe;
    erinnerung.anzahl_richtiger_wiederholungen = object.anzahl_richtiger_wiederholungen;

    return erinnerung;
  }

}

export enum Lernstufe {
  Halb,
  Ganz
}