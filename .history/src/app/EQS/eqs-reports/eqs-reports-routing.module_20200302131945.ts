import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'equipmentList',
        data: {
          title: 'Equipment List',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'Equipment List' }
          ]
        },
        component: EquipmentListComponent
      },
      {
        path: 'equipmentHistory',
       // component: IcsCustomheaderfieldComponent,
        data: {
          title: 'Equipment History',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'Equipment History' }
          ]
        }
      },
      {
        path: 'alertsetting',
       // component: IcsAlertsettingsComponent,
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
export class EqsReportsRoutingModule { }
