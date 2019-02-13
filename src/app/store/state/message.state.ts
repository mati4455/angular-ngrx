import { Message } from './../../models/message';

export interface MessageState {
  messages: Message[];
}

export const initialMessageState: MessageState = {
  messages: []
};
