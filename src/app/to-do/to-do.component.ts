import { Component, ViewChild, inject } from '@angular/core';
import { TodoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoService } from './to-do-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [TodoFormComponent, ToDoListComponent],
  providers: [ToDoService],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  @ViewChild(TodoFormComponent) form!: NgForm;

  items: string[] = [];
  editable = true;

  private readonly service = inject(ToDoService);

  constructor() {
    this.service.clear.pipe(takeUntilDestroyed()).subscribe(() => {
      this.items = [];
    });
  }

  onNewItem(item: string): void {
    this.items.push(item);
    this.items = [...this.items];
  }

  onSave(): void {
    this.service.saveList();
  }

  onEdit(): void {
    this.service.editList();
  }

  onClear(): void {
    this.service.clearList();
  }
}
