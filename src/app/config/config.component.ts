import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectConfig } from '../store/selectors/config.selectors';
import { AppState } from '../store/state/app.state';
import { GetConfig } from '../store/actions/config.actions';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
