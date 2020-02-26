import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { IcsfullComponent } from './layouts/icsfull/icsfull.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './EQS/starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: 'ics',
    component: IcsfullComponent,
    canActivate: [AuthGuard],
    children: [
      //
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
  }
];
