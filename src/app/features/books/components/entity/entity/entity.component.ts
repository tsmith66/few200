import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addBook(titleEl: HTMLInputElement, authorEl: HTMLInputElement) {
    const data = {
      title: titleEl.value,
      author: authorEl.value
    };
    console.log(data);

    titleEl.value = '';
    authorEl.value = '';
    titleEl.focus();

  }
}
