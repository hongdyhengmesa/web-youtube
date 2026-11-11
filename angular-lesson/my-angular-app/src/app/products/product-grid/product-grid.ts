
import { Component, signal } from '@angular/core';
import { Product } from '../product';
import { ProductCard } from "../product-card/product-card";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, MatIcon],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Primium Wireless Headphone',
      description: "Hight-quantity wireless headphone with noise cancellation and premium sound",
      price: 199.90,
      originalPrice: 250.80
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: "Track your fitness goals with this advanced smartwatch featuring heart",
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: "Compact speaker with powerful bass and 12-hour battery life.",
      price: 80.00,
    }
  ]);
}
