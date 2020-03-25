import { Component, OnInit } from '@angular/core';
import { ShoppingListItemModel } from './models';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shoppingList: ShoppingListItemModel[] = [];
  constructor(private services: ShoppingService) { }

  createANewShoppingItem(description: string) {
    this.services.addItem(description);
    this.shoppingList = this.services.getItems();
  }

  ngOnInit(): void {
    this.shoppingList = this.services.getItems();
  }

}
