import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsReportsRoutingModule } from './ics-reports-routing.module';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentHistoryComponent } from './instrument-history/instrument-history.component';
import { CalibrationReportComponent } from './calibration-report/calibration-report.component';


@NgModule({
  declarations: [InstrumentListComponent, InstrumentHistoryComponent, CalibrationReportComponent],
  imports: [
    CommonModule,
    IcsReportsRoutingModule
  ]
})
export class IcsReportsModule { }
