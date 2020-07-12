import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../../share/share.module';



@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'receive', pathMatch: 'full'},
      {
        path: '',
        component: TaskComponent,
      }
    ])
  ]
})
export class TaskModule { }
