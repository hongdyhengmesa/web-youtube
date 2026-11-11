import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Signals } from './signals/signals';
import { ComputeSignal } from './compute-signal/compute-signal';
import { EffectSignal } from './effect-signal/effect-signal';
import { Header } from './header/header';
import { ProductGrid } from './products/product-grid/product-grid';
import { ProductCard } from "./products/product-card/product-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
