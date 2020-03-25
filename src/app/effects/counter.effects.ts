import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // when applicationStated -> (read the valeu from
  // localStorage for 'by') -> (countBySet(x) | nothing)
  readCountBySet$ = createEffect(() => this.actions$
    .pipe(
      ofType(appActions.applicationStarted),
      map(a => localStorage.getItem('by')),
      filter(a => a !== null),
      map(savedValue => counterActions.countBySet({ by: +savedValue }))
    ), {
    dispatch: true
  }
  );


  // logEverything$ = createEffect(
  //   () => this.actions$.pipe(
  //     tap(a => console.log('Got an effect of type: ' + a.type))
  //   ), {
  //   dispatch: false
  // }
  // );

  // CountBySet -> write it local storage -> do nothing.
  saveCountBySet$ = createEffect(() => this.actions$
    .pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), {
    dispatch: false
  });

  constructor(private actions$: Actions) { }

}
