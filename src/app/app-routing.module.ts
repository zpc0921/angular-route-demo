import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SideLayoutComponent} from './share/components/side-layout/side-layout.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'task'},
  {
    path: '',
    component: SideLayoutComponent,
    children: [
      {path: 'task', loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
