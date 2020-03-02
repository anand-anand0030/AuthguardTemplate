import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsParameterRoutingModule } from './eqs-parameter-routing.module';
import { EqsParameterComponent } from '../eqs-parameter/eqs-parameter.component';


@NgModule({
  declarations: [EqsParameterComponent],
  imports: [
    CommonModule,
    EqsParameterRoutingModule
  ]
})
export class EqsParameterModule { }
