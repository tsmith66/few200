import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListItemModel } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() model: ShoppingListItemModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
