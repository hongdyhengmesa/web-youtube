import { Component, signal } from '@angular/core';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  protected count = signal(0);

  increaseCounter(){
    this.count.update(value => value + 1);
  }

  decreaseCounter(){
    this.count.update(value => value - 1);
  }

  resetCounter(){
    this.count.set(0);
  }

}
