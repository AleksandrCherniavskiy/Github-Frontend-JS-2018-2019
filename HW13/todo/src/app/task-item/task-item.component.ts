import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
 @Input() item: Task;

  constructor() { }

  ngOnInit() {
  }

  resolve() {
    this.item.isChecked = true;
  }

}
