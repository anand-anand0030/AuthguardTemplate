import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqsComponent } from './eqs-master/eqs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'EQS Main Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'EQS Master Page' }
      ]
    },
    component: EqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EQSRoutingModule { }

