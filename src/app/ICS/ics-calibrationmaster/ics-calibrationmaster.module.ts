import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsCalibrationmasterRoutingModule } from './ics-calibrationmaster-routing.module';
import { IcsCalibrationmasterComponent } from './ics-calibrationmaster.component';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';


@NgModule({
  declarations: [IcsCalibrationmasterComponent],
  imports: [
    CommonModule,
    IcsCalibrationmasterRoutingModule,
    DropDownButtonModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class IcsCalibrationmasterModule { }
