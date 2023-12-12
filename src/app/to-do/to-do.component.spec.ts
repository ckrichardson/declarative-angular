import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoComponent } from './to-do.component';
import { ToDoService } from './to-do-service.service';
import { toDoServiceMock } from '../mocks/to-do-service-mock';

describe('ToDoListComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToDoComponent],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Save / Clear', () => {
    let saveSpy: jasmine.Spy<(this: typeof ToDoService) => ToDoService>;
    let clearSpy: jasmine.Spy<(this: typeof ToDoService) => ToDoService>;

    beforeEach(() => {
      saveSpy = spyOn(toDoServiceMock, 'saveList');
      clearSpy = spyOn(toDoServiceMock, 'clearList');
    });

    it('should call saveList on save', () => {
      component.onSave();

      expect(saveSpy).toHaveBeenCalled();
    });

    it('should call clearList on clear', () => {
      component.onClear();

      expect(clearSpy).toHaveBeenCalled();
    });
  });
});
