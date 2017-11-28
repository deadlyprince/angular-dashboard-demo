import { Component } from '@angular/core';
import {HtClientService} from "ht-angular";
import { GetUrlParam } from "ht-utility";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    private clientService: HtClientService
  ) {
    const token = GetUrlParam('key');
    if (token) this.clientService.token = token;
  }
}
