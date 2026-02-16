import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    isChecked: new FormControl('false', [Validators.required])
  })

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get('name');
  }
  get surname() {
    return this.profileForm.get('surname');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get city() {
    return this.profileForm.get('city');
  }
  get state() {
    return this.profileForm.get('state');
  }
  get zipcode() {
    return this.profileForm.get('zipcode ');
  }

} 
