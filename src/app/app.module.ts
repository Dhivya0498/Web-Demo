import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { HttpModule } from '@angular/http';
import { Countries } from '@fuse/services/countries';
import { GlobalService } from '@fuse/services/globals.service';
import { InitialGuard } from '@fuse/services/initial.gaurd';
import { PageGuard } from '@fuse/services/page.gaurd';
import { RoleGuard } from '@fuse/services/role.gaurd';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { environment } from '../environments/environment';
import { MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';

import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { LyTheme2, StyleRenderer, LY_THEME, LY_THEME_NAME, LyHammerGestureConfig } from '@alyle/ui';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LySliderModule } from '@alyle/ui/slider';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { config } from 'rxjs/internal/config';
import { NgxImageCompressService } from 'ngx-image-compress';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule, } from '@angular/material/card';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { LoginComponent } from './main/apps/Authentication/Login/login.component';
import { LoginService } from './main/apps/Authentication/Login/login.service';

// import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
// import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    },
    // {
    //     path: 'login',
    //     loadChildren: () => import('./main/apps/Authentication/Login/login.module').then(s => s.LoginModule),
      
    // },
    // {
    //     path: '',
    //     loadChildren: () => import('./main/apps/Authentication/Login/login.module').then(s => s.LoginModule),
      
    // },
    {
        path: '',
        component : LoginComponent
    },
    {
        path: 'login',
        component : LoginComponent
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        LyImageCropperModule,
        LyButtonModule,
        LyIconModule,
        LySliderModule,
        MatCheckboxModule,
        LyToolbarModule,
        MaterialFileInputModule,
        MatCardModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        HttpModule,
        NgxSpinnerModule,

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,

        NgCircleProgressModule.forRoot(),
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ],
    providers: [
        Countries, GlobalService, InitialGuard, PageGuard, RoleGuard,
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        [LyTheme2],
        [StyleRenderer],
        { provide: LY_THEME_NAME, useValue: 'minima-light' },
        { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
        { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
        { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
        { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config },
        NgxImageCompressService,
        LoginService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }