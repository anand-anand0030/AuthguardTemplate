import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsMaintenanceRoutingModule } from './eqs-maintenance-routing.module';
import { EqsMaintenanceComponent } from '../eqs-maintenance/eqs-maintenance.component';


@NgModule({
  declarations: [EqsMaintenanceComponent],
  imports: [
    CommonModule,
    EqsMaintenanceRoutingModule
  ]
})
export class EqsMaintenanceModule { }
