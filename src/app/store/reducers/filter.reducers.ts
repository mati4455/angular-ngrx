import { FilterActions, EFilterActions } from './../actions/filter.actions';

export const filterReducers = (state: string, action: FilterActions): string => {
  switch (action.type) {
    case EFilterActions.SetFilter: {
      return action.filter;
    }
    default:
      return state;
  }
};
