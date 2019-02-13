import { initialMessageState, MessageState } from '../state/message.state';
import { MessageActions, EMessageActions } from '../actions/message.actions';

export const messageReducers = (
  state = initialMessageState,
  action: MessageActions
): MessageState => {
  switch (action.type) {
    case EMessageActions.GetMessagesSuccess: {
      return {
        ...state,
        messages: action.payload
      };
    }

    default:
      return state;
  }
};
