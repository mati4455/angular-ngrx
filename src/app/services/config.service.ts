import { Observable, from, of } from 'rxjs';
import { Config } from '../models/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private fakeConfig: Config = {
    numberOfMessagesPerPage: 5,
    sortDirection: 'asc'
  };

  getConfig(): Observable<Config> {
    console.log('read value from service...');
    return of(this.fakeConfig);
  }
}
