import { Component, Input, ViewChild, inject } from "@angular/core";
import { TodoFormComponent } from "./to-do-form/to-do-form.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { ToDoService } from "./service/to-do-service.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NgForm } from "@angular/forms";
import { ToDoModel } from "./service/model/to-do-model";

@Component({
  selector: "app-to-do",
  standalone: true,
  imports: [TodoFormComponent, ToDoListComponent],
  templateUrl: "./to-do.component.html",
  styleUrl: "./to-do.component.scss",
})
export class ToDoComponent {
  @Input() vm!: ToDoModel;

  readonly service = inject(ToDoService);

  onSave(): void {
    this.service.save();
  }

  onEdit(): void {
    this.service.edit();
  }

  onClear(): void {
    this.service.clear();
  }
}
