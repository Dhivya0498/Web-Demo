import { Component, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, Renderer2, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Http, Response, HttpModule } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { WindowService } from '@fuse/services/window.service';
import { GlobalService } from '@fuse/services/globals.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import {LoginService} from 'app/main/apps/Authentication/Login/login.service';
import { environment } from 'environments/environment';


declare var $: any;

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    ​
    windowRef: any;
    loginForms: FormGroup;
    signInForms: FormGroup;
    createAccountForms : FormGroup;
    accessArray:any = [];
    setupApp:boolean = true;
    createAccount:boolean = false;
    loginPage:boolean = false;
    submittedForm: any;
    constructor(
        private win: WindowService,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _translateService: TranslateService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private cd: ChangeDetectorRef,
        private http: Http,
        private activatedRoute: ActivatedRoute,
        private route: Router,
        private loginService: LoginService,
        private renderer: Renderer2,
        private snackBar: MatSnackBar,
        private spinner: NgxSpinnerService,
        public global: GlobalService,
    ) {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        this.loginForms = this._formBuilder.group({
            companyName: ["", Validators.required],
            domainName:["", Validators.required],
            location: ["", Validators.required],
            noofEmployees: ["", Validators.required]
        });
        this.createAccountForms = this._formBuilder.group({
            firstName: ["", Validators.required],
            lastName:["", Validators.required],
            password: ["", Validators.required]
        });

        this.signInForms = this._formBuilder.group({
            loginID: ["", Validators.required],
            password: ["", Validators.required]
        });

        this.windowRef = this.win.windowRef;
    }

    ngOnInit(): void {
        this.windowRef = this.win.windowRef;
    }

    ngAfterViewInit() { }

    clearLoginScreen(): void {
        var P = this;
        P.loginForms.get('companyName').setValue("");
        P.loginForms.get('location').setValue("");
        P.loginForms.get('noofEmployees').setValue("");
        P.loginForms.get('domainName').setValue("");
        

        P.loginForms.get('companyName').markAsUntouched();
        P.loginForms.get('location').markAsUntouched();
        P.loginForms.get('noofEmployees').markAsUntouched();
        P.loginForms.get('domainName').markAsUntouched();

        

        P.loginForms.markAsUntouched();
        P.loginForms.markAsPristine();
    }
    clearSetupScreen(): void {
        var P = this;
        P.createAccountForms.get('firstName').setValue("");
        P.createAccountForms.get('lastName').setValue("");
        P.createAccountForms.get('password').setValue("");
        

        P.createAccountForms.get('firstName').markAsUntouched();
        P.createAccountForms.get('lastName').markAsUntouched();
        P.createAccountForms.get('password').markAsUntouched();        

        P.createAccountForms.markAsUntouched();
        P.createAccountForms.markAsPristine();
    }

    
    clearSignUpScreen(): void {
        var P = this;
        P.signInForms.get('loginID').setValue("");
        P.signInForms.get('password').setValue("");


        P.signInForms.get('loginID').markAsUntouched();
        P.signInForms.get('password').markAsUntouched();

        

        P.signInForms.markAsUntouched();
        P.signInForms.markAsPristine();
    }

 

    createUser(){
        var P = this;
        P.spinner.show();
        P.setupApp = false;
        P.createAccount = true;
        P.clearSetupScreen();
        P.spinner.hide();
    }
    setupUser(){
        var P = this;
        P.spinner.show();
        P.setupApp = false;
            P.http.post(environment.nodeServerURL + "/user_data/addUser",
            {
                "company_name": P.loginForms.value.companyName,
                "location": P.loginForms.value.location,
                "no_of_employees" : P.loginForms.value.noofEmployees,
                "domain_name":P.loginForms.value.domainName,
                "first_name": P.createAccountForms.value.firstName,
                "last_name":P.createAccountForms.value.lastName,
                "password":P.createAccountForms.value.password
            }).subscribe(res => {
                const result = res.json();
                if (result.status == 200) {
                    P.createAccount = false;
                    P.loginPage = true;
                    P.clearSignUpScreen();
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
                else if (result.status == 500) {
                    P.snackBar.open('Internal Server Alert', '', {
                        duration: 3000,
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'errorsnackbarclass'
                    });
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
                else {
                    P.snackBar.open('Something entered gone wrong,please try again !', '', {
                        duration: 3000,
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'errorsnackbarclass'
                    });
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
            }, error => {
                P.snackBar.open('Something entered gone wrong,please try again !', '', {
                    duration: 3000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                    panelClass: 'errorsnackbarclass'
                });
                P.spinner.hide();
                P.cd.detectChanges();
            });
        

    }
    loginDirectly(){
        var P = this;
        P.loginPage = true;
        P.setupApp = false;
        P.clearLoginScreen();
        P.clearSetupScreen();
    }
    loginCheck() {
        var P = this;
        P.spinner.show();
        P.http.post(environment.nodeServerURL + "/user_data/login",
            {
                "loginID": P.signInForms.value.loginID,
                "password": P.signInForms.value.password,
            }).subscribe(res => {
                const result = res.json();
                localStorage.clear();
                if (result.status == 200) {
                    P.route.navigate(['/apps/main/announcement']);
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
                else if (result.status == 500) {
                    P.loginForms.controls['password'].setErrors({ 'InvalidUserNamePassword': true });
                    P.snackBar.open('Invalid Login ID or Password!', '', {
                        duration: 3000,
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'errorsnackbarclass'
                    });
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
                else {
                    P.snackBar.open('Something entered gone wrong,please try again !', '', {
                        duration: 3000,
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'errorsnackbarclass'
                    });
                    P.spinner.hide();
                    P.cd.detectChanges();
                }
            }, error => {
                P.snackBar.open('Something entered gone wrong,please try again !', '', {
                    duration: 3000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                    panelClass: 'errorsnackbarclass'
                });
                P.spinner.hide();
                P.cd.detectChanges();
            });
        

    }
    signUp(){
        var P = this;
        P.loginPage = false;
        P.setupApp = true;
        P.clearLoginScreen();
        P.clearSetupScreen();
        
    }
​
}