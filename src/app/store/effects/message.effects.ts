import { GetMessagesSuccess } from './../actions/message.actions';
import { MessagesService } from './../../services/messages.services';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { EMessageActions, GetMessages } from '../actions/message.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {
  constructor(
    private messageService: MessagesService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getMessages$ = this.actions$.pipe(
    ofType<GetMessages>(EMessageActions.GetMessages),
    switchMap(() => this.messageService.getMessages()),
    switchMap(messages => of(new GetMessagesSuccess(messages)))
  );
}
