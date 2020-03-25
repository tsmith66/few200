import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as booksActions from '../actions/books.actions';
import { switchMap, map } from 'rxjs/operators';
import { BookEntity } from '../reducers/books.reducer';

@Injectable()
export class BooksEffects {

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<{ books: BookEntity[] }>('http://localhost:3000/books')
        .pipe(
          map(response => response.books),
          map(books => booksActions.booksLoadedSuccessfully({ books }))
        ))
    ), { dispatch: false }
  );
  constructor(private actions$: Actions, private clients: HttpClient) { }


}

// [‎3 / ‎25 / ‎2020 2: 39 PM]; Jeff; Gonzalez:
// loadBooks$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(appActions.applicationStarted), // if it is applicationStarted
//     switchMap(() => this.client.get<{ books: BookEntity[] }>('http://localhost:3000/books') // switch to a http get
//       .pipe(
//         map(response => response.books), // that response will be { books: BookEntity[]} so just "pluck out" the books property
//         map(books => booksActions.booksLoadedSuccessfully({ books })) // dispatch the action with the books from the API
//       )
//     )
//   ), { dispatch: true }

// );

