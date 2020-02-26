import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsQualificationRoutingModule } from './eqs-qualification-routing.module';
import { EqsQualificationComponent } from './eqs-qualification.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { PageService, SortService, FilterService, GroupService, GridModule} from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [EqsQualificationComponent],
  imports: [
    CommonModule,
    EqsQualificationRoutingModule,
    DropDownButtonModule, GridModule, ButtonModule
  ],
  providers:[PageService, SortService, FilterService, GroupService]
})
export class EqsQualificationModule { }
