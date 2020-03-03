import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsParameterRoutingModule } from './eqs-parameter-routing.module';
import { EqsParameterComponent } from '../eqs-parameter/eqs-parameter.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { GridModule, FilterService, GroupService, SortService, PageService } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [EqsParameterComponent],
  imports: [
    CommonModule,
    EqsParameterRoutingModule,
    DropDownButtonModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class EqsParameterModule { }
