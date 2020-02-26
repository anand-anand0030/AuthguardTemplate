import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsQualificationRoutingModule } from './eqs-qualification-routing.module';
import { EqsQualificationComponent } from './eqs-qualification.component';


@NgModule({
  declarations: [EqsQualificationComponent],
  imports: [
    CommonModule,
    EqsQualificationRoutingModule
  ]
})
export class EqsQualificationModule { }
