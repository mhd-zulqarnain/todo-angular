import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetialsComponent } from './todo-detials.component';

describe('TodoDetialsComponent', () => {
  let component: TodoDetialsComponent;
  let fixture: ComponentFixture<TodoDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
