import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ToDoService } from "../to-do-service.service";
import { ToDoModel } from "../model/to-do-model";
import { signal } from "@angular/core";

const toDoItems = signal<string[]>([]);
const showDelete = signal<boolean>(true);
const vm$ = new BehaviorSubject<ToDoModel>({
  showDelete,
  toDoItems,
});
const vm = {
  showDelete,
  toDoItems,
};

export const toDoServiceMock = {
  _toDoItems: toDoItems,
  _showDelete: showDelete,
  _vm$: vm$,
  vm$: vm$.asObservable(),
  vm: vm$.value,
  save: () => {},
  edit: () => {},
  clear: () => {},
  addItem: (item: string) => {},
  removeItem: (index: number) => {},
} as unknown as ToDoService;
