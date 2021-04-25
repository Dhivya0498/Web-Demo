import { Injectable, Inject, EventEmitter, Output } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { Http, Response, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare var $: any;

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class GlobalService {
    public isLoggedIn = "";
    public userID = "";
    public loginID = "";
    public employeeID = "";
    public employeeCode = "";
    public employeeName = "";
    public sessionID = "";
    public name = "";
    public role = "";
    public email = "";
    public profileImage = "";

    entryTypes = [];
    hosts = [];
    persons = [];
    organizations = [];
    vehicles = [];

    constructor(private http: Http, private route: Router, private routeUrl: ActivatedRoute, private location: Location) { }

    @Output() emitterChange: EventEmitter<boolean> = new EventEmitter();

    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("isLoggedIn");
        this.userID = localStorage.getItem("userID");
        this.loginID = localStorage.getItem("loginID");
        this.employeeID = localStorage.getItem("employeeID");
        this.employeeCode = localStorage.getItem("employeeCode");
        this.employeeName = localStorage.getItem("employeeName");
        this.sessionID = localStorage.getItem("sessionID");
        this.name = localStorage.getItem("name");
        this.role = localStorage.getItem("role");
        this.email = localStorage.getItem("email");
        this.profileImage = localStorage.getItem("profileImage");
    }

    emitPerson() {
        this.emitterChange.emit(true);
    }
}