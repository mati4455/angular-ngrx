import { SetVisibilityFilter } from './../store/actions/filter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/state/app.state';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../models/task.filter';

@Component({
  selector: 'app-todo-filter-switcher',
  templateUrl: './todo-filter-switcher.component.html',
  styleUrls: ['./todo-filter-switcher.component.scss']
})
export class TodoFilterSwitcherComponent implements OnInit {
  filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  setFilter(filter: string) {
    this.store.dispatch(new SetVisibilityFilter(filter));
  }
}
