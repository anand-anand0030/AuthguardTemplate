import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentHistoryComponent } from './instrument-history/instrument-history.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'instrumentsList',
        data: {
          title: 'Instrument List',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'Instrument List' }
          ]
        },
        component: InstrumentListComponent
      },
      {
        path: 'instrumentsHistory',
        component: InstrumentHistoryComponent,
        data: {
          title: 'instrumentsHistory',
          urls: [
            { title: 'Dashboard', url: '/landing' },
            { title: 'ICS', url: '/icshome'  },
            { title: 'instrumentsHistory' }
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
export class IcsReportsRoutingModule { }
