import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SideLayoutComponent} from './share/components/side-layout/side-layout.component';
import {AuthGuard} from './share/guard/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'task'},
  {
    path: '',
    component: SideLayoutComponent,
    children: [
      {path: 'task', loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
