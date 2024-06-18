import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gods_data from '../../../assets/data/gods_data.json';

@Component({
  selector: 'gods-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gods-display.component.html',
  styleUrl: './gods-display.component.css',
})
export class GodsDisplayComponent implements OnInit, AfterContentChecked {
  godsNames: string[] = [];
  godIds: number[] = [];

  ngOnInit(): void {
    this.godsNames = gods_data.gods.map((godName) => {
      return godName.nome;
    });

    this.godIds = gods_data.gods.map((godId) => {
      return godId.id;
    });
  }

  ngAfterContentChecked(): void {
    const godCards: NodeListOf<HTMLElement> =
      document.querySelectorAll('.godCard');

    const funOnDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement;
      event.dataTransfer?.setData('id', target.id);

    };

    const funOnDragEnd = (event: DragEvent) => {};


    godCards.forEach((godCard) => {
      godCard.ondragstart = funOnDragStart;
      godCard.ondragend = funOnDragEnd;
    });


    // TODO: Fazer os cards ser droppados de volta no display
    // TODO: Estudar drag and drop
  }
}
