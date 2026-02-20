
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule,FormsModule ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  courseName: string ="Learning Angular version 21"

  inputType: string ="message";
  minlength: number = 7;
  maxlength: number = 10;

  constructor(){

  }

  showMessage(){
    alert("Welcome to the about page")
  }

  OnCityChange(){
    alert(`city changed ${{value: String}}`);
  }

  allData(val:string){
    console.log(val);  
  }
}
