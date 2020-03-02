import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/eqsfull/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarEqsComponent } from './shared/sidebar-eqs/sidebar-eqs.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SidebarIcsComponent } from './shared/sidebar-ics/sidebar-ics.component';
import { IcsfullComponent } from './layouts/icsfull/icsfull.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
// import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './shared/footer/footer.component';
import { EqsCalibrationRecordMasterComponent } from './EQS/eqs-calibration-record-master/eqs-calibration-record-master.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarEqsComponent,
    LoginComponent,
    SidebarIcsComponent,
    IcsfullComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    EsqCalibrationRecordMasterComponent,
    EqsCalibrationRecordMasterComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    GridModule ,
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
