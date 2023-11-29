import { Component } from '@angular/core';
import {environment} from "../environments/environment.development";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular API table rendering';

  constructor(private router: Router) {
    console.log(environment.production); // Logs false for development environment
  }

  isUserRoute(): boolean {
    return this.router.url === '/user';
  }

  navigateToUser() {
    this.router.navigate(['/user']);
  }

  isProductionRoute(): boolean {
    return this.router.url === '/production';
  }

  navigateToProduction() {
    this.router.navigate(['/production']);
  }

  goBack() {
    window.history.back();
  }
}
