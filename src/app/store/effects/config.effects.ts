import { GetConfig, EConfigActions, GetConfigSuccess } from './../actions/config.actions';
import { ConfigService } from './../../services/config.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigEffects {
  constructor(private configService: ConfigService, private actions$: Actions) {}

  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap(config => of(new GetConfigSuccess(config)))
  );
}
