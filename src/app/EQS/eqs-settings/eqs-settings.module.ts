import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqsSettingsRoutingModule } from './eqs-settings-routing.module';
import { EqsCustomheaderfieldsComponent } from './eqs-customheaderfields/eqs-customheaderfields.component';
import { EqsUsersettingsComponent } from './eqs-usersettings/eqs-usersettings.component';
import { EqsAlertsettingsComponent } from './eqs-alertsettings/eqs-alertsettings.component';


@NgModule({
  declarations: [EqsCustomheaderfieldsComponent, EqsUsersettingsComponent, EqsAlertsettingsComponent],
  imports: [
    CommonModule,
    EqsSettingsRoutingModule
  ]
})
export class EqsSettingsModule { }
