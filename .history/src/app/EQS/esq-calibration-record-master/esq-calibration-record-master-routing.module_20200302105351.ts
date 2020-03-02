import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsqCalibrationRecordMasterComponent } from './esq-calibration-record-master.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          title: 'Eqs Calibaration Master',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS Calibaration Master' }
          ]
        },
        component: EsqCalibrationRecordMasterComponent
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
export class EsqCalibrationRecordMasterRoutingModule { }
