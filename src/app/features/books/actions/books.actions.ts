import { props, createAction } from '@ngrx/store';
import { BookEntity } from '../reducers/books.reducer';

export const booksLoadedSuccessfully = createAction(
  '[booksFeature] books loaded successfully',
  props<{ books: BookEntity[] }>()
);

let tempId = 1;

export const bookAdded = createAction(
  '[booksFeature] book added',
  ({ title, author }: { title: string, author: string }) => ({
    payload: {
      id: 'T' + tempId++,
      title,
      author
    } as BookEntity
  })
);
