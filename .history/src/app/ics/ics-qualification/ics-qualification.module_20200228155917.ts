import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsQualificationRoutingModule } from './ics-qualification-routing.module';
import { IcsQualificationComponent } from './ics-qualification.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, GroupService, FilterService } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
@NgModule({
  declarations: [IcsQualificationComponent],
  imports: [
    CommonModule,
    IcsQualificationRoutingModule,
    DropDownButtonModule,
    GridModule,
    DatePickerModule,
    UploaderModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})

export class IcsQualificationModule { }
