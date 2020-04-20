import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsMaintenanceRoutingModule } from './eqs-maintenance-routing.module';
import { EqsMaintenanceComponent } from '../eqs-maintenance/eqs-maintenance.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, GroupService, FilterService } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [EqsMaintenanceComponent],
  imports: [
    CommonModule,
    EqsMaintenanceRoutingModule,
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
export class EqsMaintenanceModule { }
