import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { ToDoService } from "../service/to-do-service.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ToDoModel } from "../service/model/to-do-model";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-to-do-form",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, CommonModule],
  templateUrl: "./to-do-form.component.html",
  styleUrl: "./to-do-form.component.scss",
})
export class TodoFormComponent {
  @ViewChild("newItemForm") newItemForm!: NgForm;

  item: string = "";

  private readonly service = inject(ToDoService);

  onSubmit(): void {
    this.service.addItem(this.item);
    this.newItemForm.reset();
  }
}
