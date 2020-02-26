import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/eqsfull/full.component';
import { IcsfullComponent } from './layouts/icsfull/icsfull.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
 import { LandingComponent } from './landing/landing.component';

export const Approutes: Routes = [
  {
    path: '',  // --------------------------EQS Routes-----------------------------------
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'landing', redirectTo: '/landing', pathMatch: 'full' },
      {
        path: 'eqshome',
        loadChildren: './EQS/eqs.module#EqsModule'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  // ---------------------------------ICS Routes--------------------
  {
    path: '',
    component: IcsfullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'landing', redirectTo: '/landing', pathMatch: 'full' },
      {
        path: 'icshome',
        loadChildren: './ICS/ics.module#ICSModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
];
