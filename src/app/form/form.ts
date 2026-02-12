
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  public show: boolean = false;
  constructor(){
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit')
  }

  onclick(){
    // this.show = true;
  }
} 
