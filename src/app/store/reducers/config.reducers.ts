import { ConfigState } from './../state/config.state';
import { ConfigActions, EConfigActions } from './../actions/config.actions';
import { initialConfigState } from '../state/config.state';

export const configReducers = (state = initialConfigState, action: ConfigActions): ConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload
      };
    }

    default:
      return state;
  }
};
