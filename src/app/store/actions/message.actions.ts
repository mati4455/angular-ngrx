import { Message } from './../../models/message';
import { Action } from '@ngrx/store';

export enum EMessageActions {
  GetMessage = '[Message] Get Message',
  GetMessageSuccess = '[Message] Get Message Success',
  GetMessages = '[Message] Get Messages',
  GetMessagesSuccess = '[Message] Get Messages Success'
}

export class GetMessage implements Action {
  public readonly type = EMessageActions.GetMessage;
  constructor(public payload: number) {}
}

export class GetMessageSuccess implements Action {
  public readonly type = EMessageActions.GetMessageSuccess;
  constructor(public payload: Message) {}
}

export class GetMessages implements Action {
  public readonly type = EMessageActions.GetMessages;
}

export class GetMessagesSuccess implements Action {
  public readonly type = EMessageActions.GetMessagesSuccess;
  constructor(public payload: Message[]) {}
}

export type MessageActions = GetMessage | GetMessageSuccess | GetMessages | GetMessagesSuccess;
