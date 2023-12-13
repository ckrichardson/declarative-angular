import { Injectable, signal } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ToDoModel } from "./model/to-do-model";

@Injectable()
export class ToDoService {
  private readonly _showDelete = signal<boolean>(true);
  private readonly _toDoItems = signal<string[]>([]);

  private readonly _vm$ = new BehaviorSubject<ToDoModel>({
    showDelete: this._showDelete,
    toDoItems: this._toDoItems,
  });

  get vm$(): Observable<ToDoModel> {
    return this._vm$.asObservable();
  }

  get vm(): ToDoModel {
    return this._vm$.value;
  }

  addItem(item: string): void {
    this._toDoItems.update((items) => {
      items.push(item);
      return items;
    });
  }

  removeItem(index: number): void {
    if (!this._toDoItems().length) return;

    this._toDoItems.update((items) => {
      items.splice(index, 1);
      return items;
    });
  }

  save(): void {
    this._showDelete.set(false);
  }

  edit(): void {
    this._showDelete.set(true);
  }

  clear(): void {
    this._toDoItems.set([]);
    this._showDelete.set(true);
  }
}
