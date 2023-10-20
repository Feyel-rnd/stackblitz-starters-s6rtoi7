import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  template: `
    
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,{
  providers: [
    provideRouter(APP_ROUTES),
  ]
 });
