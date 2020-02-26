import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsCalibrationmasterRoutingModule } from './ics-calibrationmaster-routing.module';
import { IcsCalibrationmasterComponent } from './ics-calibrationmaster.component';


@NgModule({
  declarations: [IcsCalibrationmasterComponent],
  imports: [
    CommonModule,
    IcsCalibrationmasterRoutingModule
  ]
})
export class IcsCalibrationmasterModule { }
