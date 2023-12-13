import { Signal } from "@angular/core";
import { Observable } from "rxjs";

export type ToDoModel = {
  showDelete: Signal<boolean>;
  toDoItems: Signal<string[]>;
};
