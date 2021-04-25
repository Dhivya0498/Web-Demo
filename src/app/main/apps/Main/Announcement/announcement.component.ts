import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, Inject, EventEmitter } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
// import { AnnouncementService } from 'app/main/apps/TestApp/Demo/Announcement/announcement.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Http, Response, HttpModule } from '@angular/http';
import { GlobalService } from '@fuse/services/globals.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FuseConfigService } from '@fuse/services/config.service';
import { BehaviorSubject, fromEvent, merge, Subject } from 'rxjs';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AnnouncementService } from './announcement.service';

@Component({
    selector: 'announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [DatePipe]
})
export class AnnouncementComponent implements OnInit {

    showAdd: boolean = false;
    announcementData = [];

    private _unsubscribeAll: Subject<any>;

    constructor(
        private global: GlobalService,
        private dialog: MatDialog,
        private _fuseConfigService: FuseConfigService,
        private spinner: NgxSpinnerService,
        private announcementService: AnnouncementService,
        private cd: ChangeDetectorRef,
        private datePipe: DatePipe,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    ) {
        var P = this;
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        var P = this;
        P.announcementService.onAnnouncementChanged.subscribe((result: any) => {
            P.announcementData = result[0].announcement_getall;
            console.log(result)
        })

    }
    addInputMaterials(): void {
        var P = this;
        const dialogRef = P.dialog.open(AnnouncementAddPopup, {
            data: {},
            width: '700px'
        });
        dialogRef.componentInstance.addAnnouncementItemClick.subscribe(result => {

            if (result != undefined && result != null && result != "") {

            }
        });
        dialogRef.afterClosed().subscribe((result) => {

            if (result != undefined && result != null && result != "") {
                this.announcementData.push(result)
            }

        });
    }

    ngOnDestroy() {


    }

}
@Component({
    selector: 'announcementAddPopup',
    templateUrl: './announcementAddPopup.html',
})
export class AnnouncementAddPopup {

    PUpdate = false;
    update = false;
    stageItem = {};
    selectedChip = "";

    isAnnoncement = false;
    isEvent = false;
    isReminder = false;
    announceForm: FormGroup;
    submittedForm: any;

    @Output() addAnnouncementItemClick = new EventEmitter<any>();
    constructor(
        public matDialogRef: MatDialogRef<AnnouncementAddPopup>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private announcementService: AnnouncementService,
        private _formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private snackBar: MatSnackBar,
        private global: GlobalService,
        private dialog: MatDialog,
        private http: Http,
        private cd: ChangeDetectorRef,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    ) {
        var P = this;
        try {
            P.PUpdate = data.PUpdate;
            P.update = data.update;

        } catch (e) { }
        if (P.PUpdate == true) {
            P.announceForm = P._formBuilder.group({
                subject: [{ value: data.editMasterSizeGroupDetails.subject, disabled: false }, [Validators.required]],
                time: [{ value: data.editMasterSizeGroupDetails.time, disabled: false }, [Validators.nullValidator]],
                expiryDate: [{ value: data.editMasterSizeGroupDetails.expiryDate, disabled: false }, [Validators.nullValidator]],
                location: [{ value: data.editMasterSizeGroupDetails.location, disabled: false }, [Validators.nullValidator]],
                description: [{ value: data.editMasterSizeGroupDetails.description, disabled: false }, [Validators.required]],
                notifyToArray: [{ value: data.editMasterSizeGroupDetails.notifyToArray, disabled: false }, [Validators.nullValidator]],
            });
        }
        else {
            P.announceForm = P._formBuilder.group({
                subject: [{ value: '', disabled: false }, [Validators.required]],
                time: [{ value: '', disabled: false }, [Validators.nullValidator]],
                expiryDate: [{ value: '', disabled: false }, [Validators.nullValidator]],
                location: [{ value: '', disabled: false }, [Validators.nullValidator]],
                description: [{ value: '', disabled: false }, [Validators.required]],
                notifyToArray: [{ value: [], disabled: false }, [Validators.nullValidator]],

            });
        }
    }

    changeSelected($event): void {
        var value = $event.target.textContent;
        this.selectedChip = value;
        if (value == "Announcement") {
            this.isAnnoncement = true;
            this.isEvent = false;
            this.isReminder = false;

            this.announceForm.get('time').setValue("");
            this.announceForm.get('expiryDate').setValue("");
            this.announceForm.get('location').setValue("");

            this.announceForm.get('time').markAsUntouched();
            this.announceForm.get('expiryDate').markAsUntouched();
            this.announceForm.get('location').markAsUntouched();


        }
        else if (value == "Event") {

            this.isAnnoncement = false;
            this.isEvent = true;
            this.isReminder = false;


        }
        else if (value == "Reminder") {
            this.isAnnoncement = false;
            this.isEvent = false;
            this.isReminder = true;

            this.announceForm.get('time').setValue("");

            this.announceForm.get('time').markAsUntouched();
        }
    }

    ngOnInit(): void {

        var P = this;
    }




    clearMasterSize(): void {
        var P = this;
        P.announceForm.get('subject').setValue("");
        P.announceForm.get('time').setValue("");
        P.announceForm.get('expiryDate').setValue("");
        P.announceForm.get('location').setValue("");
        P.announceForm.get('description').setValue("");
        P.announceForm.get('notifyToArray').setValue("");

        P.announceForm.get('subject').markAsUntouched();
        P.announceForm.get('time').markAsUntouched();
        P.announceForm.get('expiryDate').markAsUntouched();
        P.announceForm.get('location').markAsUntouched();
        P.announceForm.get('description').markAsUntouched();
        P.announceForm.get('notifyToArray').markAsUntouched();


        P.announceForm.markAsUntouched();
        P.announceForm.markAsPristine();
    }

    addAnnounceDetailsConfirm(): void {
        var P = this;
        P.spinner.show();
        P.submittedForm = P.announceForm.value;
        console.log(P.announceForm)

        let bForm = P.submittedForm;
        P.announcementService.addAnnounceDetail(bForm).then((result: any) => {
            if (result.status == 200) {
                P.matDialogRef.close("");
                P.spinner.hide();
                P.snackBar.open('Added Successfully', '', {
                    duration: 3000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                    panelClass: 'successsnackbarclass'
                });
                P.cd.detectChanges();
            }
            else if (result.status == 422) {
                P.announceForm.get('sizes').setErrors({ 'ExistingSize': true });
                P.spinner.hide();
                P.cd.detectChanges();
            }
            else {
                P.matDialogRef.close();
                P.snackBar.open('Something entered gone wrong,please try again!', '', {
                    duration: 3000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                    panelClass: 'errorsnackbarclass'
                });
                P.spinner.hide();
                P.cd.detectChanges();
            }
        }).catch((error: any) => {
            P.matDialogRef.close();
            P.snackBar.open('Something entered gone wrong,please try again!', '', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: 'errorsnackbarclass'
            });
            P.spinner.hide();
            P.cd.detectChanges();
        });

    }

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    notifyPersons = [];

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.notifyPersons.push(value.trim());
            this.announceForm.get('notifyToArray').setValue(this.notifyPersons);

        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit): void {
        const index = this.notifyPersons.indexOf(fruit);

        if (index >= 0) {
            this.notifyPersons.splice(index, 1);
            this.announceForm.get('notifyToArray').setValue(this.notifyPersons);
        }
    }
}