import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcsParameterComponent } from './ics-parameter.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ics-parameter',
      urls: [
        { title: 'Dashboard', url: '/landing' },
        { title: 'ics-parameter' }
      ]
    },
    component: IcsParameterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcsParameterRoutingModule { }
