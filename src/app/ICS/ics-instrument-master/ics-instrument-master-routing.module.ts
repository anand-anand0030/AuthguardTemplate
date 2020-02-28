import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcsComponent } from './ics-instrument-master.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
// import {IcsComponent} from './ics-instrument-master.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Instrument Master',
      urls: [
        { title: 'Dashboard', url: '/landing' },
        { title: 'Inst Master' }
      ]
    },
    component: IcsComponent
  },
  {
    path: 'addinstrument',
    component: AddInstrumentComponent,
    data: {
      title: 'Add Instrument',
      urls: [
        { title: 'Dashboard', url: '/landing' },
        { title: 'ICS', url: '/icshome'  },
        { title: 'Add Instrument' }
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ICSRoutingModule { }
