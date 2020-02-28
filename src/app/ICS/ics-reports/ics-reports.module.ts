import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsReportsRoutingModule } from './ics-reports-routing.module';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentHistoryComponent } from './instrument-history/instrument-history.component';
import { CalibrationReportComponent } from './calibration-report/calibration-report.component';
import { UsageReportComponent } from './usage-report/usage-report.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [InstrumentListComponent, InstrumentHistoryComponent, CalibrationReportComponent, UsageReportComponent],
  imports: [
    CommonModule,
    IcsReportsRoutingModule
  ]
})
export class IcsReportsModule { }
