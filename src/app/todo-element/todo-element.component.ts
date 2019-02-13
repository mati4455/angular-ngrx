import { CompleteTask, DeleteTask } from './../store/actions/todo.actions';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../models/task';
import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { EditTask } from '../store/actions/todo.actions';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;

  @Input() task: Task;
  editable = false;
  text = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.text = this.task.text;
  }

  saveChanges() {
    const text = this.text.trim();

    if (text === '') {
      this.store.dispatch(new DeleteTask(this.task.id));
    } else {
      this.store.dispatch(new EditTask(this.task.id, this.text));
    }

    this.editable = false;
  }

  enableEditMode() {
    this.editable = true;
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 0);
  }

  toggleStatus() {
    this.store.dispatch(new CompleteTask(this.task.id));
  }
}
