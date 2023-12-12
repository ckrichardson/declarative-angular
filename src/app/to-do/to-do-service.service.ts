import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ToDoService {
  private readonly _save$: Subject<null> = new Subject<null>();
  private readonly _clear$: Subject<null> = new Subject<null>();
  private readonly _edit$: Subject<null> = new Subject<null>();

  constructor() {}

  get save(): Observable<null> {
    return this._save$.asObservable();
  }

  get edit(): Observable<null> {
    return this._edit$.asObservable();
  }

  get clear(): Observable<null> {
    return this._clear$.asObservable();
  }

  saveList(): void {
    this._save$.next(null);
  }

  editList(): void {
    this._edit$.next(null);
  }

  clearList(): void {
    this._clear$.next(null);
  }
}
