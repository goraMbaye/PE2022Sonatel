import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/home/home.module';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';

import { Vue360Component } from 'src/app/pages/vue360/vue360.component';
import { AgiliteComponent } from 'src/app/pages/agilite/agilite.component';
import { MultiservicesComponent } from 'src/app/pages/multiservices/multiservices.component';
import { PartenairesComponent } from 'src/app/pages/partenaires/partenaires.component';
import { PolitiquerhComponent } from 'src/app/pages/politiquerh/politiquerh.component';
import { ConnectiviteComponent } from 'src/app/pages/connectivite/connectivite.component';
import { OptimisationComponent } from 'src/app/pages/optimisation/optimisation.component';
import { BackofficeComponent } from 'src/app/pages/backoffice/backoffice.component';

import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { GrapheComponent } from 'src/app/graphe/graphe.component';
import { ChartsModule } from 'ng2-charts';
import { Graphe2Component } from 'src/app/graphe2/graphe2.component';

@NgModule({
    declarations: [
        //Graphe2Component,
        GrapheComponent,
        Vue360Component,
        AgiliteComponent,
        MultiservicesComponent,
        PartenairesComponent,
        PolitiquerhComponent,
        ConnectiviteComponent,
        OptimisationComponent,
        ProfileComponent,
        BackofficeComponent,
        LandingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        AdminLayoutRoutingModule,
        ChartsModule
    ],
    exports: [],
    providers: []
})

export class AdminLayoutModule { }