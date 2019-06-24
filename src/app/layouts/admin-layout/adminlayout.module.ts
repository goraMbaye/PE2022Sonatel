import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/home/home.module';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';

import { ProfileComponent } from 'src/app/profile/profile.component';
import { LandingComponent } from 'src/app/landing/landing.component';


@NgModule({
    declarations: [
        ProfileComponent,
        LandingComponent,
    ],
    imports: [
        CommonModule,
        HomeModule,
        AdminLayoutRoutingModule
    ],
    exports: [],
    providers: []
})

export class AdminLayoutModule {}