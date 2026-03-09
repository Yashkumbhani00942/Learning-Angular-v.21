import { Component, effect, signal } from '@angular/core';
import { Button } from '../../reusableComponents/button/button';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  data = 10;
  count = signal(0); // 

  constructor() {
    effect(() => {
      console.log(`this is data`, this.data);

      console.log(`this is count`, this.count());
      if (this.count() == 11) {
        this.count.set(0)
      }

    })
  }

  updateData() {
    this.data++
  }

  updateCount() {
    this.count.set(this.count()+1);
  }

  // Computed Signal

  // height = signal();

}
