import { AddTask } from './../store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-todo-new-task',
  templateUrl: './todo-new-task.component.html',
  styleUrls: ['./todo-new-task.component.scss']
})
export class TodoNewTaskComponent implements OnInit {
  text = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addTask() {
    this.store.dispatch(new AddTask(this.text));
    this.text = '';
  }
}
