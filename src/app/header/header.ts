import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [ ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  isTrue: boolean = false;
  @Output() sendValue=new EventEmitter();
  
  sidebarView( ) {
    this.isTrue = !this.isTrue  
    console.log(this.isTrue)
    this.sendValue.emit(this.isTrue)
  }

}
