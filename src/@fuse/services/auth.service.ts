import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized = false;
  constructor(private router: Router) { }
  logIn() {
    var P = this;
    localStorage.setItem("isLoggedIn", "true");
    P.authorized = true;
    P.router.navigate(['/quickview']);
  }
  logOut() {
    var P = this;
    localStorage.clear();
    P.authorized = false;
    P.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
  }
  get isLoggedIn() {
    return this.authorized;
  }
}