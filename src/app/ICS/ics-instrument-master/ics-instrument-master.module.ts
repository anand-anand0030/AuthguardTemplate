import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICSRoutingModule } from './ics-instrument-master-routing.module';
import { IcsComponent } from './ics-instrument-master.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [IcsComponent, AddInstrumentComponent],
  imports: [
    CommonModule,
    ICSRoutingModule,
    GridModule, ButtonModule,
    NgbModule,
    UploaderModule,
    DatePickerModule,
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class ICSModule { }
