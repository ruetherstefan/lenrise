import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import {BibliothekService} from './lernen/bibliothek.service'
import { LocalStorageModule } from 'angular-2-local-storage';


import { AppComponent } from './app.component';
import { LernenComponent } from './lernen/lernen.component';
import { HauptmenuComponent } from './hauptmenu/hauptmenu.component';
import { Routes, RouterModule } from '@angular/router';
import { LernauswahlComponent } from './lernauswahl/lernauswahl.component';
import {GehirnService} from './persistence/gehirn.service';
import { FocusDirective } from './lernen/focus.directive';
import { WiederholenComponent } from './wiederholen/wiederholen.component'

const appRoutes: Routes = [
  { path: 'lernen/:vokabeln', component: LernenComponent},
  { path: 'lernauswahl', component: LernauswahlComponent},
  { path: 'wiederholen', component: WiederholenComponent},
  { path: '',      component: HauptmenuComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LernenComponent,
    HauptmenuComponent,
    LernauswahlComponent,
    FocusDirective,
    WiederholenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LocalStorageModule.withConfig({
            prefix: 'lenrise',
            storageType: 'localStorage'
        })
  ],
  providers: [BibliothekService, GehirnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
