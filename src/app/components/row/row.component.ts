import { AfterViewChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css',
})
export class RowComponent implements AfterViewChecked {
  @Input()
  tier!: string;
  @Input()
  classe!: string;

  ngAfterViewChecked(): void {
    const rows = document.querySelectorAll('.row');

    const funOnDragOver = (event: DragEvent) => {
      // Função de drag
      event.preventDefault();
    };

    const funOnDrop = (event: DragEvent) => {
      event.preventDefault();
      const draggedCardId = event.dataTransfer?.getData('id');
      if (draggedCardId) {
        const draggedCard = document.getElementById(draggedCardId);
        const e = event.target as HTMLElement;
        if (draggedCard) {
          e.appendChild(draggedCard);
        }
      }
    };

    rows.forEach((row) => {
      const extendedRow = row as HTMLElement;
      extendedRow.ondragover = funOnDragOver;
      extendedRow.ondrop = funOnDrop;
    });
  }
}
