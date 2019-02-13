import { SHOW_ALL } from './../../models/task.filter';
import { Task } from './../../models/task';
import { MessageState, initialMessageState } from './message.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState, initialConfigState } from './config.state';

export interface AppState {
  router?: RouterReducerState;
  messages: MessageState;
  config: ConfigState;

  todo: Task[];
  filter: string;
}

export const initialAppState: AppState = {
  messages: initialMessageState,
  config: initialConfigState,
  todo: [],
  filter: SHOW_ALL
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
