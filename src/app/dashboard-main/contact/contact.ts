import { Component } from '@angular/core';

// Prime Sidebar
import { Drawer, DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [AvatarModule, ButtonModule, Drawer, RippleModule, DrawerModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  visible: boolean = false;
  drawerRef!: Drawer;

    closeCallback(e :any): void {
        this.drawerRef.close(e);
    }

}
