import { Component, OnInit } from '@angular/core';
import { ShoppingListItemModel } from './model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shoppingList: ShoppingListItemModel[] = [
    { description: 'Bread' },
    { description: 'Beer' }
  ];
  constructor() { }

  createANewShoppingItem(description: string) {
    const newItem: ShoppingListItemModel = { description };
    this.shoppingList = [newItem, ...this.shoppingList];
  }

  ngOnInit(): void {
  }

}
