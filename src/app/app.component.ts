import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ToDoComponent } from "./to-do/to-do.component";
import { Observable } from "rxjs";
import { ToDoModel } from "./to-do/service/model/to-do-model";
import { ToDoService } from "./to-do/service/to-do-service.service";

@Component({
  selector: "app-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, ToDoComponent],
  providers: [ToDoService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  readonly service = inject(ToDoService);

  vm$: Observable<ToDoModel> = this.service.vm$;
}
