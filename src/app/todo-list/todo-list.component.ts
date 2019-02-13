import { AddTask, CompleteTask, EditTask, GetTasks } from './../store/actions/todo.actions';
import { Component, OnInit } from '@angular/core';
import { getVisibleTasks, getNumberOfTasksToDo } from '../store/selectors/todo.selectors';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.pipe(select(getVisibleTasks));
  leftToDo$ = this.store.pipe(select(getNumberOfTasksToDo));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetTasks());
  }
}
