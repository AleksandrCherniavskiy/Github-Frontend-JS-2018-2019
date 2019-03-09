import {Component, OnInit, OnChanges,  Output} from '@angular/core';
import {Task} from '../task';
import { TodolistService } from '../core/services/todolist.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
   todoList: Task[];

  constructor(private todolistService: TodolistService) {}

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoList = this.todolistService.getTodoList();
  }

  addTask(taskText: string): void {
    this.todolistService.addTask(taskText);
  }
}
