import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsReportsRoutingModule } from './eqs-reports-routing.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentHistoryComponent } from './equipment-history/equipment-history.component';
import { EqsCalibrationReportComponent } from './eqs-calibration-report/eqs-calibration-report.component';
// import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';


@NgModule({
  declarations: [EquipmentListComponent, EquipmentHistoryComponent, EqsCalibrationReportComponent],
  imports: [
    CommonModule,
    EqsReportsRoutingModule,
    // DropDownButtonModule
  ]
})
export class EqsReportsModule { }
