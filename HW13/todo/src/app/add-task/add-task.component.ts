import {Component, OnInit, Output} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  task: Task;
  taskValue: string;
  todolist: Array<Task>;

  constructor() {
    this.todolist = [];
  }
  ngOnInit() {
  }

  addTask() {
    this.task = new Task();
    this.task.text = this.taskValue;
    this.task.isChecked = false;
    this.todolist.push(this.task);
    console.log(this.todolist);
  }

  remove(i: number) {
    // add
    this.todolist.splice(i, 1);
  }

}
