import { Config } from './../../models/config';
import { Action } from '@ngrx/store';

export enum EConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
  constructor() {}
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: Config) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
