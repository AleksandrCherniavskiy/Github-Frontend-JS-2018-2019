import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Task } from '../task';
import { Logger } from '../core/services/logger';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item: Task;
  @Input() index: number;

  @Output() deleteTask = new EventEmitter();

  constructor( private logger: Logger ) {}

  ngOnInit() {
  }

  resolve() {
    this.item.isChecked = true;
  }

  delete() {
    this.deleteTask.emit('delete');
  }

  edit() {
    this.item.isEdit = !this.item.isEdit;
    this.logger.log(`Task ${this.item.text} edit ${this.item.isEdit}`);
  }


}
