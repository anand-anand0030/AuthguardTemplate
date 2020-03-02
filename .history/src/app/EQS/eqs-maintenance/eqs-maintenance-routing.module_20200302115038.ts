import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsMaintenanceComponent } from './eqs-maintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          title: 'EQS Maintenance',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS Maintenance' }
          ]
        },
        component: EqsMaintenanceComponent
      },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqsMaintenanceRoutingModule { }
