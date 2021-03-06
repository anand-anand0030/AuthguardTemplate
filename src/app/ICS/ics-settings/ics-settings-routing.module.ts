import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcsUsersettingComponent } from './ics-usersetting/ics-usersetting.component';
import { IcsCustomheaderfieldComponent } from './ics-customheaderfield/ics-customheaderfield.component';
import { IcsAlertsettingsComponent } from './ics-alertsettings/ics-alertsettings.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usersetting',
        data: {
          title: 'User Setting',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'User Setting' }
          ]
        },
        component: IcsUsersettingComponent
      },
      {
        path: 'customheaderfield',
        component: IcsCustomheaderfieldComponent,
        data: {
          title: 'Custom Header Fields',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'ICS', url: '/icshome'  },
            { title: 'Custom Header Fields' }
          ]
        }
      },
      {
        path: 'alertsetting',
        component: IcsAlertsettingsComponent,
        data: {
          title: 'Alert Setting',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'ICS', url: '/icshome'  },
            { title: 'Alert Setting' }
          ]
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcsSettingsRoutingModule { }
