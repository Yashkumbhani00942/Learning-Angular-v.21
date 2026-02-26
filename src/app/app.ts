import { Component, signal } from '@angular/core';
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

  isSidebarExpanded = true;
  toChild = true;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

}
