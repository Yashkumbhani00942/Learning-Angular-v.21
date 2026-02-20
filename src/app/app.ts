import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Header,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  // @ViewChild('dashboarddemo') headerComponent!:ElementRef;

  // ngAfterViewInit(){
  //   console.log(this.headerComponent.nativeElement)
  //   this.headerComponent.nativeElement.style.backgroundColor='red'
  // }
  
  tochild!: boolean;
  bool(val: boolean) {
    console.log(val)
    this.tochild = val;
  }
}
