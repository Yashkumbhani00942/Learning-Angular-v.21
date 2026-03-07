import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  isSidebarExpanded = true;
  toChild = true;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

}
