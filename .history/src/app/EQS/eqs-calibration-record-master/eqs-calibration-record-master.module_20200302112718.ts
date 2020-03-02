import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsCalibrationRecordMasterRoutingModule } from './eqs-calibration-record-master-routing.module';
import { EqsCalibrationRecordMasterComponent } from './eqs-calibration-record-master.component';


@NgModule({
  declarations: [EqsCalibrationRecordMasterComponent],
  imports: [
    CommonModule,
    EqsCalibrationRecordMasterRoutingModule
  ]
})
export class EqsCalibrationRecordMasterModule { }
