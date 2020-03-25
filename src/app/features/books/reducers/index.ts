import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';
import { BookListItem } from '../../models';

export const featureName = 'booksFeature';

export interface BooksFeatureState {
  books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BooksFeatureState> = {
  books: fromBooks.reducer
};

// 1. Selectors.

// 2. Create a Feature Selector
const selectBooksFeature = createFeatureSelector<BooksFeatureState>(featureName);

// 3. Create a selector per branch
const selectBooksBranch = createSelector(selectBooksFeature, b => b.books);

// 4. Create any helpers you need
// need one that returns an array of BookEntity
const selectBookEntityArray = fromBooks.adapter.getSelectors(selectBooksBranch).selectAll;

// 5. Create the selectors that the components actually need.
export const selectBookListModelArray = createSelector(
  selectBookEntityArray,
  books => books as BookListItem[]
);

