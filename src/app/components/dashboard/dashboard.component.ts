import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countOfShoppingItems: number;
  constructor(private services: ShoppingService) { }

  ngOnInit(): void {
    this.countOfShoppingItems = this.services.getItemCount();
  }
}
