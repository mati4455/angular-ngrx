import { Observable, of } from 'rxjs';
import { Task } from './../models/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private fakeData: Task[] = [
    { id: 1, text: 'Example Task 1', completed: false },
    { id: 2, text: 'Example Task 2', completed: true },
    { id: 3, text: 'Example Task 3', completed: false }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.fakeData);
  }
}
