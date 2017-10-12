import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HtModule} from "ht-angular-client";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HtModule.forRoot({token: 'sk_55fc65eb64c0b10300c54ff79ea3f6ef22981793', mapType: 'google'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
