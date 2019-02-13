import { Task } from './../../models/task';
import { MessageState, initialMessageState } from './message.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState, initialConfigState } from './config.state';
import { SHOW_ALL } from 'src/app/models/task.filter';

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
