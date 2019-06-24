import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
// import { LandingComponent } from './landing/landing.component';
// import { ProfileComponent } from './profile/profile.component';
// import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/authlayout.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/adminlayout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    // ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
