import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcsComponent } from './ics-instrument-master.component';
// import {IcsComponent} from './ics-instrument-master.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ICS Main Page',
      urls: [
        { title: 'Dashboard', url: '/landing' },
        { title: 'InstrumentalMaster' }
      ]
    },
    component: IcsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ICSRoutingModule { }
