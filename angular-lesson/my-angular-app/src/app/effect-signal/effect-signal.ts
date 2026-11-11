import { Component, effect, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-effect-signal',
  imports: [],
  templateUrl: './effect-signal.html',
  styleUrl: './effect-signal.css',
})
export class EffectSignal {
  protected count = signal(0);
  private readonly countLog = effect(() =>{
    console.log('Count changed: ', this.count())
  });
}
