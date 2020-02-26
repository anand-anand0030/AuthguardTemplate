import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EqsComponent } from './eqs.component';
import {EQSRoutingModule} from './eqs-routing.module';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { PageService, SortService, FilterService, GroupService, GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  // imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  imports: [FormsModule, CommonModule, EQSRoutingModule,   GridModule],
  declarations: [EqsComponent, AddEquipmentComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class EqsModule {}
