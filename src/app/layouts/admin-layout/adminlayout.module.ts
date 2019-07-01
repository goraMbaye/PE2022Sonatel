import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/home/home.module';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';

import { AgiliteComponent } from 'src/app/pages/agilite/agilite.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';


@NgModule({
    declarations: [
        AgiliteComponent,
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