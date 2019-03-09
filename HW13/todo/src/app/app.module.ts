import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { AppRoutingModule } from './app-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskItemComponent,
    EditTaskComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
