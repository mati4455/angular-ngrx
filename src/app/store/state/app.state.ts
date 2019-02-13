import { MessageState, initialMessageState } from './message.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState, initialConfigState } from './config.state';

export interface AppState {
  router?: RouterReducerState;
  messages: MessageState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  messages: initialMessageState,
  config: initialConfigState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
