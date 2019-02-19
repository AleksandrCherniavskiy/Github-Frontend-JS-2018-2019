import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: string;
  todolist: Array<string>;

  constructor() {
    this.todolist = [];
  }
  ngOnInit() {
  }

  addTask(task) {
    this.todolist.push(this.task);
    this.task = null;
    console.log(this.todolist);
  }

  remove(task) {
    this.todolist.pop();
  }
}
