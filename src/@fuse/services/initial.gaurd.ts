import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take, first } from 'rxjs/operators';
import { AuthService } from './auth.service'
import { GlobalService } from './globals.service';

@Injectable()
export class InitialGuard implements InitialGuard {
    getLoggedIn: any;
    constructor(private authService: AuthService, private global: GlobalService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.getLoggedIn = localStorage.getItem("isLoggedIn");
        return true;
    }
}