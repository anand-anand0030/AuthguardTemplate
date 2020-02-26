import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsQualificationRoutingModule } from './eqs-qualification-routing.module';
import { EqsQualificationComponent } from './eqs-qualification.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';


@NgModule({
  declarations: [EqsQualificationComponent],
  imports: [
    CommonModule,
    EqsQualificationRoutingModule,
    DropDownButtonModule
  ]
})
export class EqsQualificationModule { }
