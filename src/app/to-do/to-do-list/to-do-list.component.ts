import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoService } from '../to-do-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  @Input() items: string[] = [];

  showDelete: boolean = true;

  private readonly service = inject(ToDoService);

  constructor() {
    this.service.save.pipe(takeUntilDestroyed()).subscribe(() => {
      this.showDelete = false;
    });

    this.service.edit.pipe(takeUntilDestroyed()).subscribe(() => {
      this.showDelete = true;
    });

    this.service.clear.pipe(takeUntilDestroyed()).subscribe(() => {
      this.showDelete = true;
    });
  }

  onClick(index: number) {
    this.items.splice(index, 1);
  }
}
