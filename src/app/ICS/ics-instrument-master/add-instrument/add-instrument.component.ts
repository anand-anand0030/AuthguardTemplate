import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EditSettingsModel, ToolbarItems, GridLine , IEditCell} from '@syncfusion/ej2-angular-grids';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { EmitType } from '@syncfusion/ej2-base';
 import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { FilterService } from '@syncfusion/ej2-angular-grids';

import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  providers:[FilterService],
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




  public items: ItemModel[] = [
      {
           text: 'A'
      },
      {
           text: 'B'
       },
       {
           text: 'C'
      },
      {
        text: 'NA'
    }];
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



