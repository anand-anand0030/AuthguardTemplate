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
          title: 'customheaderfield',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'ICS', url: '/icshome'  },
            { title: 'customheaderfield' }
          ]
        }
      },
      {
        path: 'alertsetting',
        component: IcsAlertsettingsComponent,
        data: {
          title: 'alertsetting',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'ICS', url: '/icshome'  },
            { title: 'alertsetting' }
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
