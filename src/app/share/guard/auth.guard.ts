import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthLoginService} from '../service/auth-login.service';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authLogin: AuthLoginService,
              private router: Router,
              private message: NzMessageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authLogin.isLogin) {
      this.message.warning('当前未登录，请先登录！');
      this.router.navigate(['login']);
    }
    return this.authLogin.isLogin;
  }
}
