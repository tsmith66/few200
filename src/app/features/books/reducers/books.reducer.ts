import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.booksLoadedSuccessfully, (s, a) => adapter.setAll(a.books, s))
);

export function reducer(state: BookState = initialState, action: Action) {
  return reducerFunction(state, action);
}



