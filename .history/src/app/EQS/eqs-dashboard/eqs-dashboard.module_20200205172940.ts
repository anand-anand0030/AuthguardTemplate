import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsDashboardRoutingModule } from './eqs-dashboard-routing.module';
import { EqsDashboardComponent } from './eqs-dashboard.component';


@NgModule({
  declarations: [EqsDashboardComponent],
  imports: [
    CommonModule,
    EqsDashboardRoutingModule
  ]
})
export class EqsDashboardModule { }
