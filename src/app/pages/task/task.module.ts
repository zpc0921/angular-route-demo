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
        children: [
          {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
          {path: 'receive', loadChildren: () => import('./receive/receive.module').then(m => m.ReceiveModule)}
        ]
      }
    ])
  ]
})
export class TaskModule { }
