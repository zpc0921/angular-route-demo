import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiveComponent} from './receive.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ReceiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'todo', pathMatch: 'full'},
      {
        path: '',
        component: ReceiveComponent,
      }
    ])
  ]
})
export class ReceiveModule { }
