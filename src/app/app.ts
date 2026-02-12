import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  text = "Welcome to Angular Learning Sessions"
  get_user_detail(a:number, b:number) {
      return a + b;
  }

  show=true;

  bool:boolean=false
  onClick() {
    this.bool=true;
  }

}
