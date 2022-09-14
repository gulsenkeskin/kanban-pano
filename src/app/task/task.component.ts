import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //task türünde bir input ve edit outputları ekle
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();









}
