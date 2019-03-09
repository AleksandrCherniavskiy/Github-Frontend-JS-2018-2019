import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task';
import { Logger } from '../core/services/logger';
import { TodolistService} from '../core/services/todolist.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item: Task;

  constructor( private logger: Logger,
               private service: TodolistService) {}

  ngOnInit() {
  }

  edit(item: Task) {
    TodolistService.edit(item);
  }

  resolve(item: Task) {
    TodolistService.resolve(item);
  }

  delete(item: Task) {
    TodolistService.delete(item);
  }


}
