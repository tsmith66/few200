import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-entity',
  templateUrl: './shopping-entity.component.html',
  styleUrls: ['./shopping-entity.component.css']
})
export class ShoppingEntityComponent implements OnInit {

  @Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addIt(stuff: HTMLInputElement) {
    this.itemAdded.emit(stuff.value);
    stuff.value = '';
    stuff.focus();
  }
}
