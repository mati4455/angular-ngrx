import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterSwitcherComponent } from './todo-filter-switcher.component';

describe('TodoFilterSwitcherComponent', () => {
  let component: TodoFilterSwitcherComponent;
  let fixture: ComponentFixture<TodoFilterSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFilterSwitcherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
