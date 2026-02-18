import { Component } from '@angular/core';
import { WebNavbar } from './web-navbar/web-navbar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, WebNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  text = "Welcome to Angular Learning Sessions"
  get_user_detail(a:number, b:number) {
      return a + b;
  }
}
