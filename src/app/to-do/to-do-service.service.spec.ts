import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do-service.service';
import { Observable, Subject } from 'rxjs';

describe('ToDoServiceService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService],
    });
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Properties', () => {
    describe('save', () => {
      it('should return observable for save', () => {
        const save = service.save;

        expect(save).toBeInstanceOf(Observable);
      });
    });

    describe('edit', () => {
      it('should return observable for edit', () => {
        const edit = service.edit;

        expect(edit).toBeInstanceOf(Observable);
      });
    });

    describe('clear', () => {
      it('should return observable for clear', () => {
        const clear = service.clear;

        expect(clear).toBeInstanceOf(Observable);
      });
    });
  });
});
