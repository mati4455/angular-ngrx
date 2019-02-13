import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { messageReducers } from './message.reducers';
import { configReducers } from './config.reducers';
import { todoReducers } from './todo.reducers';
import { filterReducers } from './filter.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  messages: messageReducers,
  config: configReducers,
  todo: todoReducers,
  filter: filterReducers
};
