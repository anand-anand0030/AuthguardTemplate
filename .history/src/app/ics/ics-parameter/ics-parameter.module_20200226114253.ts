import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsParameterRoutingModule } from './ics-parameter-routing.module';
import { IcsParameterComponent } from './ics-parameter/ics-parameter.component';


@NgModule({
  declarations: [IcsParameterComponent],
  imports: [
    CommonModule,
    IcsParameterRoutingModule
  ]
})
export class IcsParameterModule { }
