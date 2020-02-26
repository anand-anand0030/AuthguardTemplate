import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsDashboardRoutingModule } from './eqs-dashboard-routing.module';
import { EqsDashboardComponent } from './eqs-dashboard.component';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ChartModule } from '@syncfusion/ej2-ng-charts';
import { StackingAreaSeriesService, CategoryService} from '@syncfusion/ej2-ng-charts';

@NgModule({
  declarations: [EqsDashboardComponent],
  imports: [
    CommonModule,
    EqsDashboardRoutingModule,
    DropDownButtonModule,ChartModule
  ],
  providers: [ StackingAreaSeriesService, CategoryService]
})
export class EqsDashboardModule { }
