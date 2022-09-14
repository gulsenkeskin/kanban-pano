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
  ]
}
