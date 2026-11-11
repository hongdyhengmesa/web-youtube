import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-compute-signal',
  imports: [],
  templateUrl: './compute-signal.html',
  styleUrl: './compute-signal.css',
})
export class ComputeSignal {

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  protected increaseCounter(){
    this.count.update(value => value + 1);
  }

  protected decreaseCounter(){
    this.count.update(value => value - 1);
  }

  protected resetCounter(){
    this.count.set(0);
  }
}
