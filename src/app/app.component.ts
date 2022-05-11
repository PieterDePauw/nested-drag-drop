import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, VERSION } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nestedArray = [
    {
      title: 'Parent 1',
      id: '1', // Make sure ID is in string as to attach it with cdkDropListConnectedTo we need it in string
      child: [
        {
          title: 'Child 11',
        },
        {
          title: 'Child 12',
        },
        {
          title: 'Child 13',
        },
      ],
    },
    {
      title: 'Parent 2',
      id: '2',
      child: [
        {
          title: 'Child 21',
        },
        {
          title: 'Child 22',
        },
        {
          title: 'Child 23',
        },
      ],
    },
    {
      title: 'Parent 3',
      id: '3',
      child: [
        {
          title: 'Child 31',
        },
        {
          title: 'Child 32',
        },
        {
          title: 'Child 33',
        },
      ],
    },
  ];
  idList = [];

  ngOnInit() {
    this.idList = this.nestedArray.map((parent) => parent.id);
  }

  dropItem(event) {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  mouseEnterHandler(
    event: MouseEvent,
    chapterExpansionPanel: MatExpansionPanel
  ) {
    if (event.buttons && !chapterExpansionPanel.expanded) {
      chapterExpansionPanel.open();
    }
  }
}
