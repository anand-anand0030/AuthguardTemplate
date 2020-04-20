import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsCustomheaderfieldsComponent } from './eqs-customheaderfields/eqs-customheaderfields.component';
import { EqsUsersettingsComponent } from './eqs-usersettings/eqs-usersettings.component';
import { EqsAlertsettingsComponent } from './eqs-alertsettings/eqs-alertsettings.component';
// import { EqsCustomheaderfieldsComponent } from './eqs-customheaderfields/eqs-customheaderfields.component';


const routes: Routes = [
  // {
    //   path: '',
    //  children: [

      {
        path: '',
        children: [
          {
            path: 'usersettings',
            data: {
              // title: 'User Setting',
              urls: [
                { title: 'Home', url: '/landing' },
                { title: 'User Setting' }
              ]
            },
            component: EqsUsersettingsComponent
          },
    
      {
        path: 'customheaderfields',
        component: EqsCustomheaderfieldsComponent,
        data: {
          // title: 'Custom Header Fields',
          urls: [
            { title: 'Home', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'Custom Header Fields' }
          ]
        }
      },

      {
        path: 'alertsettings',
        component: EqsAlertsettingsComponent,
        data: {
          // title: 'Custom Header Fields',
          urls: [
            { title: 'Home', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'Alert Settings' }
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
export class EqsSettingsRoutingModule { }
