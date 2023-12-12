import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { ToDoService } from '../to-do-service.service';
import { toDoServiceMock } from '../../mocks/to-do-service-mock';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListComponent],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Delete Icon', () => {
    it('should create copy of array with one less item when invoking onClick', () => {
      const expected = ['one', 'three'];
      component.items = ['one', 'two', 'three'];

      component.onClick(1);

      expect(component.items).toEqual(expected);
    });
  });

  describe('List Actions', () => {
    describe('save', () => {
      it('should set showDelete to false', () => {
        toDoServiceMock.saveList();

        expect(component.showDelete).toBeFalse();
      });
    });
    describe('edit', () => {
      it('should set showDelete to true', () => {
        toDoServiceMock.editList();

        expect(component.showDelete).toBeTrue();
      });
    });
    describe('edit', () => {
      it('should set showDelete to true', () => {
        toDoServiceMock.clearList();

        expect(component.showDelete).toBeTrue();
      });
    });
  });
});
