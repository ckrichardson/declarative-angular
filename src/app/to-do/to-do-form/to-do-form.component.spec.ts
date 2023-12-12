import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './to-do-form.component';
import { ToDoService } from '../to-do-service.service';
import { toDoServiceMock } from '../../mocks/to-do-service-mock';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFormComponent],
      providers: [],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Submit', () => {
    beforeEach(() => {
      component.item = 'mockItem';
      fixture.detectChanges();
    });

    it('should emit the new item and reset the form', () => {
      component.onSubmit();

      expect(component.item).toBeNull();
    });
  });
});
