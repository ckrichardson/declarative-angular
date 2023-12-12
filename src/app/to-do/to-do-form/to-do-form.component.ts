import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToDoService } from '../to-do-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss',
})
export class TodoFormComponent {
  @Output() newItem = new EventEmitter<string>();
  @ViewChild('newItemForm') newItemForm!: NgForm;

  item: string = '';

  private readonly service = inject(ToDoService);

  constructor() {
    this.service.save.pipe(takeUntilDestroyed()).subscribe(() => {
      this.newItemForm.reset();
      this.newItemForm?.form.disable();
    });

    this.service.edit.pipe(takeUntilDestroyed()).subscribe(() => {
      this.newItemForm.form.enable();
    });

    this.service.clear.pipe(takeUntilDestroyed()).subscribe(() => {
      this.newItemForm.form.enable();
      this.newItemForm?.reset();
    });
  }

  onSubmit(): void {
    this.newItem.emit(this.item);
    this.newItemForm.reset();
  }
}
