import { Injectable } from '@angular/core';
import { ShoppingListItemModel } from '../components/shopping/models';

export class ShoppingService {
  private items: ShoppingListItemModel[] = [
    { description: 'Taco Shells' },
    { description: 'Tortillas' }
  ];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(description: string) {
    this.items = [{ description }, ...this.items];
  }

  getItemCount() {
    return this.items.length;
  }
}
