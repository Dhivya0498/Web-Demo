import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { PageGuard } from '@fuse/services/page.gaurd';
import { RoleGuard } from '@fuse/services/role.gaurd';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import {MaterialFileInputModule } from 'ngx-material-file-input';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';



//Dashboards

import { AnnouncementComponent,AnnouncementAddPopup } from './Announcement/announcement.component';
// import { AnnouncementService } from './Demo/Announcement/announcement.service';




import { MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { config } from 'rxjs/internal/config';

import { NgxImageCompressService } from 'ngx-image-compress';


import { AuthGuard } from '@fuse/services/auth.guard';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QRCodeModule } from 'angularx-qrcode-cil'
import { AnnouncementService } from './Announcement/announcement.service';




const routes: Routes = [   

    {
        path: 'announcement',
        component: AnnouncementComponent,
        canActivate: [AuthGuard],
        resolve: {
            data: AnnouncementService
        }
    },


]

@NgModule({
    declarations: [
        AnnouncementComponent,
        AnnouncementAddPopup,
        
    ],
    imports: [
        RouterModule.forChild(routes),
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MaterialFileInputModule,
        MatMenuModule,
        MatDividerModule,
        NgxSpinnerModule,
        TranslateModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        NgCircleProgressModule.forRoot(),
        ChartsModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule,
        MatDialogModule,
        MatRadioModule,
        MatButtonToggleModule,
        QRCodeModule,
       
    ],
    providers: [
        PageGuard, RoleGuard,
        AuthGuard,
        NgxImageCompressService,
        AnnouncementService,
        
        { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }
    ],
    entryComponents: [
        AnnouncementAddPopup
    ]
})
export class ProductionModule { }