import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from '../models';
import { selectBookListModelArray, BooksFeatureState } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  constructor(private store: Store<BooksFeatureState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select(selectBookListModelArray);
  }

}
