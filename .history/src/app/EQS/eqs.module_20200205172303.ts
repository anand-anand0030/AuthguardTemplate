import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EqsComponent } from './eqs-master/eqs.component';
import {EQSRoutingModule} from './eqs-routing.module';
import { AddEquipmentComponent } from './eqs-master/add-equipment/add-equipment.component';

@NgModule({
  // imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  imports: [FormsModule, CommonModule, EQSRoutingModule],
  declarations: [EqsComponent, AddEquipmentComponent]
})
export class EqsModule {}
