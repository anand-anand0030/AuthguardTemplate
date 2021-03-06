import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsCalibrationRecordMasterRoutingModule } from './eqs-calibration-record-master-routing.module';
import { EqsCalibrationRecordMasterComponent } from './eqs-calibration-record-master.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, GroupService, FilterService } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';


@NgModule({
  declarations: [EqsCalibrationRecordMasterComponent],
  imports: [
    CommonModule,
    EqsCalibrationRecordMasterRoutingModule,
    GridModule, DropDownButtonModule
    DatePickerModule ,UploaderModule
  ],
  providers: [PageService, SortService, GroupService, FilterService ]
})
export class EqsCalibrationRecordMasterModule { }
