import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsParameterRoutingModule } from './ics-parameter-routing.module';
import { IcsParameterComponent } from './ics-parameter.component';
// import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, PageService, SortService, GroupService, FilterService } from '@syncfusion/ej2-angular-grids';



@NgModule({
  declarations: [IcsParameterComponent],
  imports: [
    CommonModule,
    IcsParameterRoutingModule,
    // DropDownButtonModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class IcsParameterModule { }
