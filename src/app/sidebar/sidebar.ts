import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
@Input() bool:any;

ngOnChanges( changes:SimpleChange){
  console.log(this.bool)
  console.log(changes);
  
}
}
