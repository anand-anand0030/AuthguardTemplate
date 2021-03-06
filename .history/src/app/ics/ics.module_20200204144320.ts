import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICSRoutingModule } from './ics-routing.module';
import { IcsComponent } from './ics.component';


@NgModule({
  declarations: [IcsComponent],
  imports: [
    CommonModule,
    ICSRoutingModule
  ]
})
export class ICSModule { }
