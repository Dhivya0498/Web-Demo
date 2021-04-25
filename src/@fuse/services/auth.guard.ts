import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take, first } from 'rxjs/operators';
import { AuthService } from './auth.service'
import { GlobalService } from './globals.service';

@Injectable()
export class AuthGuard implements CanActivate {
    getLoggedIn: any;
    

    constructor(private authService: AuthService, private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger;
        // this.getLoggedIn = localStorage.getItem("isLoggedIn");
        // if (this.getLoggedIn != "true") {
        //     this.router.navigate(['/login']);
        // }
        // else {
          // this.router.navigate(['/apps/production/dashboard']);
           return true;
          // }
      }
    }
