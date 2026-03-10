import { Component, computed, effect, signal } from '@angular/core';
import { Button } from '../../reusableComponents/button/button';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // -- -- -- Writable Signal -- -- -- 

  data = 10;
  count = signal(0); // 

  constructor() {
    effect(() => {
      // console.log(`this is data`, this.data);

      // console.log(`this is count`, this.count());
      if (this.count() == 11) {
        this.count.set(0)   // -- -- .set method used to overwrite a signal's current value entirely with a new, provided value.
      }

      console.log(`Area is : ` + this.area())

    })
  }

  updateData() {
    this.data++
  }

  updateCount() {
    this.count.set(this.count()+1);
  }


  // -- -- -- Computed Signal -- -- -- 

  height = signal(100);
  width = signal(25);
  // area = this.height*this.width;  // -- -- without signal
  area = computed(() => this.height()*this.width());  // -- -- Call Back function inside a computed

  increaseHeight() {
    // this.height += 10;
    // this.area = this.height*this.width;

    this.height.set(this.height()+10);
  }

  increaseWidth() {
    // this.width += 100;
    // this.area = this.height*this.width;

    this.width.set(this.width()+100);

  }

  // measureArea() {
  //     this.area();
  // }

}
