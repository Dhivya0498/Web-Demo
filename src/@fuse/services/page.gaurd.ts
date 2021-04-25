import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';
import { tap, map, take, first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { GlobalService } from './globals.service';

@Injectable()
export class PageGuard implements PageGuard {
    getLoggedIn: any;
    constructor(private auth: AuthService, private router: Router, private global: GlobalService, private location: Location) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.getLoggedIn = localStorage.getItem("isLoggedIn");
        return true;
        // if (this.getLoggedIn == "true") {
        //     return true;
        // }
        // else {
        //     this.router.navigate(['/apps']);
        // }

        //     if (loggedIn && this.global.role) {
        //         if (this.global.role == "Super User") {
        //             return true
        //         }
        //         else if (this.global.permissions) {
        //             if (next.routeConfig.path == "assets" && this.global.permissions.assets)
        //                 return true
        //             else if (next.routeConfig.path == "licensees" && this.global.permissions.businessUnits)
        //                 return true
        //             else if (next.routeConfig.path == "customers" && this.global.permissions.customers)
        //                 return true 
        //             else if (next.routeConfig.path == "locations" && this.global.permissions.locations)
        //                 return true
        //             else if (next.routeConfig.path == "products" && this.global.permissions.products)
        //                 return true
        //             else if (next.routeConfig.path == "projects" && this.global.permissions.projects)
        //                 return true 
        //             else if (next.routeConfig.path == "suppliers" && this.global.permissions.suppliers)
        //                 return true
        //             else if (next.routeConfig.path == "users" && this.global.permissions.users)
        //                 return true
        //             else
        //                 this.router.navigate(['/pages/no-access']);
        //         }
        //         else {
        //             this.router.navigate(['/pages/no-access']);
        //         }
        //     }
    }
}