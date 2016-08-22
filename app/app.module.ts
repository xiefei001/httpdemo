import {NgModule, provide}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule, XHRBackend} from "@angular/http";
import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api";
import {HeroData} from "./hero-data";
import {HeroListComponent} from "./hero-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [
    {provide: XHRBackend, useClass: InMemoryBackendService},
    {provide: SEED_DATA, useClass: HeroData}
    ],
  declarations: [AppComponent, HeroListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
