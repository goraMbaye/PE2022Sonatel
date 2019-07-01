import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AgiliteComponent } from 'src/app/pages/agilite/agilite.component';

const routeConfigs: Routes = [
    {
        path: 'axe-agilite',
        component: AgiliteComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },

    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: []
})
export class AdminLayoutRoutingModule {}