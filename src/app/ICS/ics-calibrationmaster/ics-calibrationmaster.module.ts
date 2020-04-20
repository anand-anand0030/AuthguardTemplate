import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsCalibrationmasterRoutingModule } from './ics-calibrationmaster-routing.module';
import { IcsCalibrationmasterComponent } from './ics-calibrationmaster.component';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [IcsCalibrationmasterComponent],
  imports: [
    CommonModule,
    IcsCalibrationmasterRoutingModule,
    DropDownButtonModule,
    GridModule,
    DatePickerModule,
    UploaderModule,
    ComboBoxModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class IcsCalibrationmasterModule { }
