import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent implements OnInit {

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
