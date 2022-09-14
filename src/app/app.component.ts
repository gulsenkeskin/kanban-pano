import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-pano';

  todo: Task[] = [
    {
      title: 'Kanban Pano',
      description: "Kanban Pano Task Componenti Tamamla"
    },
    {
      title: 'Http',
      description: "Angular İle Http İsteği Yap"
    },
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void { }

  drop(event: CdkDragDrop<Task[]>): void {
    //task geldiği listeye sürüklenmişse bir şey yapma
    if (event.previousContainer === event.container) {
      return;
    }

    if (event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );




  }




}
