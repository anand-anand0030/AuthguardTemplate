import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsCalibrationRecordMasterComponent } from './eqs-calibration-record-master.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          title: 'EQS CalibrationRecordMaster',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS CalibrationRecordMaster' }
          ]
        },
        component: EqsCalibrationRecordMasterComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqsCalibrationRecordMasterRoutingModule { }
