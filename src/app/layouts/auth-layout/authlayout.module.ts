import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLayoutRoutingModule } from './authlayout-routing.module';

import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        AuthLayoutRoutingModule
    ]
})

export class AuthLayoutModule {}
