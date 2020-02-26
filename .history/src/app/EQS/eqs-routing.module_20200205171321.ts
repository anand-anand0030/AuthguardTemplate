import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsComponent } from './eqs-master/eqs.component';
import {AddEquipmentComponent} from './eqs-master/add-equipment/add-equipment.component';
import { EqsDashboardComponent } from './eqs-dashboard/eqs-dashboard.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          title: 'EQS Main Page',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS Master Page' }
          ]
        },
        component: EqsComponent
      },
      {
        path: 'addequipment',
        component: AddEquipmentComponent,
        data: {
          title: 'AddEquipment',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'AddEquipment' }
          ]
        }
      },
      {
        path: 'eqsdashboard',
        component: EqsDashboardComponent,
        data: {
          title: 'dashboard',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'dashboard' }
          ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EQSRoutingModule { }

