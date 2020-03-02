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
          title: 'EQS Main Page',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS Master Page' }
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
