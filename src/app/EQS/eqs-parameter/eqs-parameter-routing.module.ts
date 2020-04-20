import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsParameterComponent } from './eqs-parameter.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          // title: 'Eqs Parameter',
          urls: [
            { title: 'Home', url: '/landing' },
            { title: 'EQS Parameter' }
          ]
        },
        component: EqsParameterComponent
      },
      // {
      //   path: 'addequipment',
      //   component: AddEquipmentComponent,
      //   data: {
      //     title: 'AddEquipment',
      //     urls: [
      //       { title: 'Dashboard', url: '/landing' },
      //       { title: 'EQS', url: '/eqshome'  },
      //       { title: 'AddEquipment' }
      //     ]
      //   }
      // },
    ],

      // path: 'eqsdashboard',
      // component: EqsDashboardComponent,
      // data: {
      //   title: 'dashboard',
      //   urls: [
      //     { title: 'Dashboard', url: '/landing' },
      //     { title: 'EQS', url: '/eqshome'  },
      //     { title: 'dashboard' }
      //   ]
      // }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqsParameterRoutingModule { }
