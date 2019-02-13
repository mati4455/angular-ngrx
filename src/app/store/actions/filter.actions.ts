import { Action } from '@ngrx/store';

export enum EFilterActions {
  SetFilter = '[Filter] Set filter'
}

export class SetVisibilityFilter implements Action {
  public readonly type = EFilterActions.SetFilter;
  constructor(public filter: string) {}
}

export type FilterActions = SetVisibilityFilter;
