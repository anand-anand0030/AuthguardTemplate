import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridLine, EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-grids';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { EmitType } from '@syncfusion/ej2-base';
 import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { FilterService } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  providers:[FilterService],
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  public dateValue: Date = new Date();
  constructor(private routes: Router) { }
   public data: object[];
   public lines: GridLine;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public dpParams: DatePicker[];
  public ddParams: IEditCell;
  public ddParams1: IEditCell;
  public ddParams2: IEditCell;


  public data3: { [key: string]: Object; }[] = [
    { Name: 'Select', Code: 'S' }
   
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Name', value: 'Code' };
  // set the height of the popup element
  public height: string = '220px';
  // set the placeholder to ComboBox input element
  public watermark: string = 'Select';
  public watermark1: string = 'Select Type';
  // filtering event handler to filter a Country
  public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
    let query: Query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.data3, query);
  }
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
    this.ddParams = { params: { value: 'IQ' } };
    this.ddParams1 = { params: { value: 'Preventive Maintenance' } };
    this.ddParams2 = { params: { value: '5' } };

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
   this.routes.navigate(['/eqshome']);
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



