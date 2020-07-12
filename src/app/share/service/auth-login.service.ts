import { Injectable } from '@angular/core';
import {timer} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  isLogin = false;

  constructor() { }

  login() {
    return timer(1).pipe(
      take(1),
      tap(() => this.isLogin = true)
    );
  }
}
