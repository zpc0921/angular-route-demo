import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiveComponent} from './receive.component';
import {RouterModule} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ToCheckComponent } from './to-check/to-check.component';
import { DoneComponent } from './done/done.component';


@NgModule({
  declarations: [ReceiveComponent, TodoComponent, ToCheckComponent, DoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'todo', pathMatch: 'full'},
      {
        path: '',
        component: ReceiveComponent,
        children: [
          {path: 'todo', component: TodoComponent},
          {path: 'to-check', component: ToCheckComponent},
          {path: 'done', component: DoneComponent},
        ]
      }
    ])
  ]
})
export class ReceiveModule { }
