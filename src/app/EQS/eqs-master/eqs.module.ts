import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EqsComponent } from './eqs.component';
import {EQSRoutingModule} from './eqs-routing.module';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { PageService, SortService, FilterService, GroupService, GridModule, EditService , ToolbarService} from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
// import { ToolbarService } from '@syncfusion/ej2-angular-filemanager/src/file-manager/filemanager-all.module';

enableRipple(true);

@NgModule({
  // imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  imports: [FormsModule, CommonModule, EQSRoutingModule, GridModule, ButtonModule ,  NgbModule,
    UploaderModule,
    DatePickerModule,ComboBoxModule],
  declarations: [EqsComponent, AddEquipmentComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    EditService, ToolbarService]
})
export class EqsModule {}
