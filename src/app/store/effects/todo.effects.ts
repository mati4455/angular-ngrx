import { GetTasks, ETodoActions, TasksLoaded } from './../actions/todo.actions';
import { TodoService } from './../../services/todo.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(private todoService: TodoService, private actions$: Actions) {}

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType<GetTasks>(ETodoActions.GetTasks),
    switchMap(() => this.todoService.getTasks()),
    switchMap(tasks => of(new TasksLoaded(tasks)))
  );
}
