import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule, ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar implements OnChanges {

  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  showFullLogo: boolean = true;

  // Method to emit toggle event to parent
  onToggleClick() {

    if (this.isExpanded) {
      // Collapsing: hide logo immediately
      this.showFullLogo = false;
    } else {
      // Expanding: wait for animation to complete (300ms)
      setTimeout(() => {
        this.showFullLogo = true;
      }, 300); // Match your CSS transition duration
    }

    this.toggleSidebar.emit();
  }


  ngOnChanges() {
    if (!this.isExpanded) {
      this.showFullLogo = false;
    } else {
      setTimeout(() => {
        this.showFullLogo = true;
      }, 300);
    }
  }

}
