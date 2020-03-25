import { Component, OnInit } from '@angular/core';
import { AppState, getCurrent, selectResetDisabled, selectCountingBy } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  resetDisabled$: Observable<boolean>;
  count$: Observable<number>;
  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(getCurrent);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
    this.by$ = this.store.select(selectCountingBy);
  }

  increment(): void {
    this.store.dispatch(actions.countIncremented());
  }

  decrement(): void {
    this.store.dispatch(actions.countDecremented());
  }

  reset(): void {
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}

