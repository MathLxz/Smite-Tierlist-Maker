import { Component } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { GodsDisplayComponent } from '../gods-display/gods-display.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RowComponent, GodsDisplayComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {


}
