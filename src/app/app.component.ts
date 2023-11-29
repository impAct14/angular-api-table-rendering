import { Component } from '@angular/core';
import {environment} from "../environments/environment.development";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    console.log(environment.production); // Logs false for development environment
  }

  title = 'Angular API table rendering';
}
