import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
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
          EndDate: new Date(8364186e5),DueDate: new Date(8364186e5),
          Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      },
      {
        EqipmentId: 10248, CustomerID: 'VINET', FrequencyOfCalibration: 5, StartDate: new Date(8364186e5),
        EndDate: new Date(8364186e5),DueDate: new Date(8364186e5),
        Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      }
    ];
  }

}
