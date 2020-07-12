import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideLayoutComponent } from './components/side-layout/side-layout.component';
import {RouterModule} from '@angular/router';
import {NzIconModule, NzLayoutModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [SideLayoutComponent],
  exports: [SideLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzIconModule
  ]
})
export class ShareModule { }
