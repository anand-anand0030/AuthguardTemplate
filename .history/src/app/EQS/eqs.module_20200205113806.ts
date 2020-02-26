import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EqsComponent } from './eqs-master/eqs.component';
import {EQSRoutingModule} from './eqs-routing.module';

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
  // imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  imports: [FormsModule, CommonModule, EQSRoutingModule],
  declarations: [EqsComponent]
})
export class EqsModule {}
