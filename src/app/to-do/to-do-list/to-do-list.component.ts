import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToDoService } from "../service/to-do-service.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ToDoModel } from "../service/model/to-do-model";

@Component({
  selector: "app-to-do-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: "./to-do-list.component.html",
  styleUrl: "./to-do-list.component.scss",
})
export class ToDoListComponent {
  @Input() vm!: ToDoModel;

  service = inject(ToDoService);

  constructor() {}

  onClick(index: number) {
    this.service.removeItem(index);
  }
}
