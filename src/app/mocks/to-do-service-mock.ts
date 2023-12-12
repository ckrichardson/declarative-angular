import { Subject } from 'rxjs';
import { ToDoService } from '../to-do/to-do-service.service';

const _save$ = new Subject<null>();
const _edit$ = new Subject<null>();
const _clear$ = new Subject<null>();

export const toDoServiceMock = {
  save: _save$.asObservable(),
  edit: _edit$.asObservable(),
  clear: _clear$.asObservable(),
  saveList: () => {
    _save$.next(null);
  },
  editList: () => {
    _edit$.next(null);
  },
  clearList: () => {
    _clear$.next(null);
  },
} as ToDoService;
