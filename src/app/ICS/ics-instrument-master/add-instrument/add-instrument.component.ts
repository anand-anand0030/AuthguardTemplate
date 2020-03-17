import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EditSettingsModel, ToolbarItems, GridLine } from '@syncfusion/ej2-angular-grids';
import { DatePicker } from '@syncfusion/ej2-calendars';


@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {
  public dateValue: Date = new Date();
  constructor(private routes: Router) { }
   public data: object[];
   public lines: GridLine;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public dpParams: DatePicker[];
   ngOnInit(): void {
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.data =
    [
      // {
      //     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      //     ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      //     ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
      // }
    ];
    this.lines = 'Both';
}

  //   this.data =
  //   [
  //     {
  //        SrNo: 1,
  //        QualificationType: 'Installation Qualification'
  //     },
  //     {
  //       SrNo: 2,
  //       QualificationType: 'Performance Qualification'
  //     },
  //     {
  //       SrNo: 3,
  //       QualificationType: 'Operation Qualification'
  //    },
  //    {
  //     SrNo: 4,
  //     QualificationType: 'Installation Operation'
  //  },
  //  {
  //   SrNo: 5,
  //   QualificationType: 'Operation Performance'
  //   } ];
// }
// tslint:disable-next-line:member-ordering

  gotoIcsMaster() {
   this.routes.navigate(['/icshome']);
  }

  // tslint:disable-next-line:member-ordering
  public path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
    public onUploadSuccess(args: any): void  {
      if (args.operation === 'upload') {
          console.log('File uploaded successfully');
      }
  }
  public onUploadFailure(args: any): void  {
  console.log('File failed to upload');
  }
  // tslint:disable-next-line:member-ordering
  public dropEle: HTMLElement;

}



