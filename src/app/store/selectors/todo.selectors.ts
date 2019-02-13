import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from './../../models/task.filter';
import { AppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';

const todoState = (state: AppState) => state.todo;
const filterState = (state: AppState) => state.filter;

export const getVisibleTasks = createSelector(
  [todoState, filterState],
  (todo, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todo;
      case SHOW_ACTIVE:
        return todo.filter(task => task.completed === false);
      case SHOW_COMPLETED:
        return todo.filter(task => task.completed === true);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }
);

export const getNumberOfTasksToDo = createSelector(
  todoState,
  todo => {
    return todo.reduce((count, task) => (task.completed === false ? count + 1 : count), 0);
  }
);
