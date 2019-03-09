import {ElementRef, Injectable, ViewChild} from '@angular/core';
import { Task } from '../../task';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todoList: Task[];

  constructor(private logger: Logger) {
    this.todoList = [];
  }
  @ViewChild('name') nameField: ElementRef;
  task: Task;
  taskValue: string;

  static delete(item: Task) {
    item.isDelete = true;
  }

  static edit(item: Task) {
    item.isEdit = !item.isEdit;
  }

  static resolve(item: Task) {
    item.isChecked = true;
  }

   addTask(taskValue: string) {
    this.task = new Task();
    this.task.id = 1;
    this.task.text = taskValue;
    this.logger.log(`task.id = ${this.task.id}`);
    this.task.isChecked = false;
    this.task.isDelete = false;
    this.task.isEdit = false;
    this.todoList.push(this.task);

    // this.nameField.nativeElement.focus();

    taskValue = '';
    this.logger.log(`taskValue at the end = ${taskValue}`);
  }

  getTodoList(): Task[] {
    this.logger.log(`This todoList = ${this.todoList}`);
    return this.todoList;
  }
}
