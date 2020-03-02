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
       component: EquipmentHistoryComponent,
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
        path: 'calibrationReport',
       component: CalibrationReportComponent,
        data: {
          title: 'Calibration Report',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'EQS', url: '/eqshome'  },
            { title: 'Calibration Report' }
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
