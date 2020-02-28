import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcsCalibrationmasterComponent } from './ics-calibrationmaster.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Calibration',
      urls: [
        { title: 'Dashboard', url: '/landing' },
        { title: 'Calibration' }
      ]
    },
    component: IcsCalibrationmasterComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcsCalibrationmasterRoutingModule { }
