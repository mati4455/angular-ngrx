import { AddTask, CompleteTask, EditTask } from './../store/actions/todo.actions';
import { Component, OnInit } from '@angular/core';
import { getVisibleTasks } from '../store/selectors/todo.selectors';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.pipe(select(getVisibleTasks));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AddTask('Example Task 1'));
    this.store.dispatch(new AddTask('Example Task 2'));
    this.store.dispatch(new AddTask('Example Tssk 3'));

    this.store.dispatch(new CompleteTask(1));

    this.store.dispatch(new EditTask(2, 'Example Task 3'));
  }
}
