import { GetConfig } from './store/actions/config.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectConfig } from './store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
