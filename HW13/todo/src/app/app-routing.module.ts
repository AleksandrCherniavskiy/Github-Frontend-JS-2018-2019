import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {EditTaskComponent} from './edit-task/edit-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'edit-task', component: EditTaskComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
