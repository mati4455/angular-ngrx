import { Injectable } from '@angular/core';
import { Message } from './../models/message';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private fakeData: Message[];

  getMessages(): Observable<Message[]> {
    return of(this.fakeData);
  }
}
