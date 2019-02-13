import { Action } from '@ngrx/store';

export enum ETodoActions {
  AddTask = '[Todo] Add task',
  EditTask = '[Todo] Edit task',
  DeleteTask = '[Todo] Delete task',
  CompleteTask = '[Todo] Complete task',
  CompleteAllTasks = '[Todo] Complete all tasks',
  ClearCompleted = '[Todo] Clear completed'
}

export class AddTask implements Action {
  public readonly type = ETodoActions.AddTask;
  constructor(public text: string) {}
}

export class EditTask implements Action {
  public readonly type = ETodoActions.EditTask;
  constructor(public id: number, public text: string) {}
}

export class DeleteTask implements Action {
  public readonly type = ETodoActions.DeleteTask;
  constructor(public id: number) {}
}

export class CompleteTask implements Action {
  public readonly type = ETodoActions.CompleteTask;
  constructor(public id: number) {}
}

export class CompleteAllTasks implements Action {
  public readonly type = ETodoActions.CompleteAllTasks;
  constructor() {}
}

export class ClearCompleted implements Action {
  public readonly type = ETodoActions.ClearCompleted;
  constructor() {}
}

export type TodoActions =
  | AddTask
  | EditTask
  | DeleteTask
  | CompleteTask
  | CompleteAllTasks
  | ClearCompleted;
