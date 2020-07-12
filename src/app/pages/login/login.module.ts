import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
