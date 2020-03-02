import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-eqs-calibration-record-master',
  templateUrl: './eqs-calibration-record-master.component.html',
  styleUrls: ['./eqs-calibration-record-master.component.css']
})
export class EqsCalibrationRecordMasterComponent implements OnInit {
  public items: ItemModel[] = [
    {
        text: 'All'
    },
    {
        text: 'Equipment 1'
    },
    {
        text: 'Equipment 2'
    }];
  data: object[];
  constructor() { }

  ngOnInit() {
    this.data =
    [
      {
          EqipmentId: 10248, CustomerID: 'VINET', FrequencyOfCalibration: 5, StartDate: new Date(8364186e5),
          EndDate: new Date(8364186e5), DueDate: new Date(8364186e5),
          Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      },
      {
        EqipmentId: 10248, CustomerID: 'VINET', FrequencyOfCalibration: 5, StartDate: new Date(8364186e5),
        EndDate: new Date(8364186e5), DueDate: new Date(8364186e5),
        Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      }
    ];
  }

}
