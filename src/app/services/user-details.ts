import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDetails {
    userAPI:string='http://localhost:3000/userDetails';

    constructor(private http:HttpClient) {

    }

    addData(data:any) {
      return this.http.post(this.userAPI,data)
    }

    getUserData() {
      return this.http.get(this.userAPI);
    }

}
