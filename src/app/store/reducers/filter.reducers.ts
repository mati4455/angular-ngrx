import { SHOW_ALL } from './../../models/task.filter';
import { FilterActions, EFilterActions } from './../actions/filter.actions';

export const filterReducers = (state: string = SHOW_ALL, action: FilterActions): string => {
  switch (action.type) {
    case EFilterActions.SetFilter: {
      return action.filter;
    }
    default:
      return state;
  }
};
