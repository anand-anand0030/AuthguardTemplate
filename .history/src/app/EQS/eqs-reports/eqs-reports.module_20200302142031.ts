import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsReportsRoutingModule } from './eqs-reports-routing.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentHistoryComponent } from './equipment-history/equipment-history.component';
import { EqsCalibrationReportComponent } from './eqs-calibration-report/eqs-calibration-report.component';


@NgModule({
  declarations: [EquipmentListComponent, EquipmentHistoryComponent, CalibrationReportComponent, EqsCalibrationReportComponent],
  imports: [
    CommonModule,
    EqsReportsRoutingModule
  ]
})
export class EqsReportsModule { }
