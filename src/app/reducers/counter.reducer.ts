import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initalState: CounterState = {
  current: 0,
  by: 1
};

const reducerHelper = createReducer(
  initalState,
  // tslint:disable-next-line: max-line-length
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })), // ...s is current state, current = current state plus the current by value
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countReset, () => initalState),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by })), // ...s is current state, and return updated by to new by
);

export function reducer(state: CounterState = initalState, action: Action) {
  return reducerHelper(state, action);
}
