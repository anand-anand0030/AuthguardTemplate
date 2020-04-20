import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsQualificationRoutingModule } from './ics-qualification-routing.module';
import { IcsQualificationComponent } from './ics-qualification.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, GroupService, FilterService } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileManagerModule , NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
  declarations: [IcsQualificationComponent],
  imports: [
    CommonModule,
    IcsQualificationRoutingModule,
    DropDownButtonModule,
    GridModule,
    DatePickerModule,
    UploaderModule,
    FileManagerModule , HttpModule, JsonpModule, ComboBoxModule

  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    NavigationPaneService, ToolbarService, DetailsViewService
   ]
})

export class IcsQualificationModule { }
