
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  
  profileForm = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    address: new FormControl()
     
  })

  onSubmit(){
    console.log("this.profileForm.value");
  }

} 
