import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsMaintenanceRoutingModule } from './ics-maintenance-routing.module';
import { IcsMaintenanceComponent } from './ics-maintenance.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [IcsMaintenanceComponent],
  imports: [
    CommonModule,
    IcsMaintenanceRoutingModule,
    DropDownButtonModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class IcsMaintenanceModule { }
