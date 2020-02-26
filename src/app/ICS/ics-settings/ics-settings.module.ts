import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcsSettingsRoutingModule } from './ics-settings-routing.module';
import { IcsUsersettingComponent } from './ics-usersetting/ics-usersetting.component';
import { IcsCustomheaderfieldComponent } from './ics-customheaderfield/ics-customheaderfield.component';
import { IcsAlertsettingsComponent } from './ics-alertsettings/ics-alertsettings.component';


@NgModule({
  declarations: [IcsUsersettingComponent, IcsCustomheaderfieldComponent, IcsAlertsettingsComponent],
  imports: [
    CommonModule,
    IcsSettingsRoutingModule
  ]
})
export class IcsSettingsModule { }
