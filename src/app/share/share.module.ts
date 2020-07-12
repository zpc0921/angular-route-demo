import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideLayoutComponent } from './components/side-layout/side-layout.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SideLayoutComponent],
  exports: [SideLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareModule { }
