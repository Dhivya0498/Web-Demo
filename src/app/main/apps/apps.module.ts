import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@fuse/services/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [

    {
        path: 'main',
        loadChildren: () => import('./Main/production.module').then(s => s.ProductionModule)
    },


    {
        path: 'login',
        loadChildren: () => import('./Authentication/Login/login.module').then(s => s.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('./Authentication/Login/login.module').then(s => s.LoginModule)
    },


];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
    ]
})
export class AppsModule { }
