import { Component } from '@angular/core';
import { AppState } from './reducers';
import { applicationStarted } from './actions/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleForHeader = 'Front-End 200 Angular - Progressive ITU Rocks';

  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }

}
