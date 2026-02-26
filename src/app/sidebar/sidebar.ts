import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  // Method to emit toggle event to parent
  onToggleClick() {
    this.toggleSidebar.emit();
  }

}
