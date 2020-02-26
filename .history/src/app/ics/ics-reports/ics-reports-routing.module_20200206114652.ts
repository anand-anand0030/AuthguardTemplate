import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'instrumentList',
        data: {
          title: 'Instrument List',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'Instrument List' }
          ]
        },
        component: InstrumentListComponent
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
export class IcsReportsRoutingModule { }
