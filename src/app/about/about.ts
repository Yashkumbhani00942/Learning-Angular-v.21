import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  courseName: string ="Learning Angular version 21"

  inputType: string ="checkbox";
  minlength: number = 7;
  maxlength: number = 10;


  constructor(){

  }

  showMessage(){
    alert("Welcome to the about page")
  }

}
