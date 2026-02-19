import { ChangeDetectorRef, Component } from '@angular/core';
import { UserDetails } from '../services/user-details';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-userlist',
  imports: [CommonModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.scss',
})

export class Userlist {

  constructor(private user: UserDetails, private cd:ChangeDetectorRef) {

  }

  allUsersData: any = [];
  ngOnInit() {
    this.user.getUserData().subscribe((res:any) =>{
      this.allUsersData = res;
      console.log(this.allUsersData);
      
    })
    this.cd.markForCheck(); 
  }
}
