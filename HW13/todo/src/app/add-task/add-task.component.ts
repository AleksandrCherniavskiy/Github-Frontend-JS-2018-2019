import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import { Task } from '../task';
import { Logger } from '../core/services/logger';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('name') nameField: ElementRef;

  task: Task;
  taskValue: string;
  todoList: Array<Task>;

  constructor() {
    this.todoList = [];
  }
  ngOnInit() {
  }

  addTask(): void {
    this.task = new Task();
    this.task.text = this.taskValue;
    this.task.isChecked = false;
    this.task.isDelete = false;
    this.task.isEdit = false;
    this.todoList.push(this.task);

    this.nameField.nativeElement.focus();

    this.taskValue = '';
  }

  delete(e, idx) {
    if (e === 'delete') {
      this.todoList[idx].isDelete = true;
    }
  }

}
