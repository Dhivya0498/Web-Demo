import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';
import { tap, map, take, first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { GlobalService } from './globals.service';

@Injectable()
export class RoleGuard implements RoleGuard {
    getLoggedIn: any;
    getRole: any;
    constructor(private auth: AuthService, private router: Router,
        private global: GlobalService, private location: Location) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.getLoggedIn = localStorage.getItem("isLoggedIn");
        this.getRole = localStorage.getItem("role");
        return true;
        // if (this.getLoggedIn == "true") {
        //     if (this.getRole == "Admin") {
        //         return true;
        //     }
        //     else {
        //         this.router.navigate(['/pages/noaccess']);
        //     }
        // }
        // else {
        //     this.router.navigate(['/apps']);
        // }
    }
}