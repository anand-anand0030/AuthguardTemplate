import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IcsComponent} from './ics.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ICS Main Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' }
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
