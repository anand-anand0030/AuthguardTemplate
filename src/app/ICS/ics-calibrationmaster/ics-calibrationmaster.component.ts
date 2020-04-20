import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { GridLine, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToastrService } from 'ngx-toastr';
import { EmitType } from '@syncfusion/ej2-base';
 import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { FilterService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-ics-calibrationmaster',
  templateUrl: './ics-calibrationmaster.component.html',
  providers:[FilterService],
  styleUrls: ['./ics-calibrationmaster.component.css']
})
export class IcsCalibrationmasterComponent implements AfterViewInit {
  closeResult: string; 

  public dateValue: Date = new Date();

  public filterOptions: FilterSettingsModel;

  public data3: { [key: string]: Object; }[] = [
    { Name: 'Select', Code: 'S' }
   
  ];
  public data4: { [key: string]: Object; }[] = [
    { Name: 'Inhouse', Code: 'I' },
    { Name: 'Vendor', Code: 'V' }
   
  ];
  public data5: { [key: string]: Object; }[] = [
    { Name: 'Dissolution tester', Code: 'Dis' },
    { Name: 'Disintegration tester', Code: 'Dis' },
    { Name: 'Tablet hardness  tester', Code: 'Tab' },
    { Name: 'Burst strength tester', Code: 'Bur' } 
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
  //end of 2 comboboxdropdown
  
      public items2: ItemModel[] = [
        {
            text: 'Inhouse'
        },
        {
            text: 'Vendor'
        }
        
        ];
    // End of 1 drop down

     
 // uploader
      public path: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
       
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
        // tslint:disable-next-line:use-life-cycle-interface

        // start of table field
      public data: object[];
      public lines: GridLine;
        ngOnInit(): void {
            this.data =
            [
               {
                 SrNo: '01',
                 InstId: 'Gx121345678',
                 InstName: 'HPLC',
                 DueDate: '03/09/2020',
                 PerformedDate: '04/09/2020',
                 NextDueDate: '04/03/2020',
               
               },
            ];
            this.lines = 'Both';              // Give border to grid 
            this.filterOptions = {             // Search data of grid using filterservice
              type: 'Menu'
           };
        }

// Start of modal ( add parameter pop up)

// tslint:disable-next-line:member-ordering

constructor(private modalService: NgbModal , private toastr: ToastrService) {}

addcalibration(addCalibrationModal) {
  this.modalService.open(addCalibrationModal, { centered: true, size: 'lg', backdrop  : 'static',
    keyboard  : false }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
ngAfterViewInit() {}

  editCalibration() {
   // alert('hi edit');
    this.toastr.success('Hi edit Toaster'); // msg,title,override previousToastMessage
    // console.log(this.toastr.success('Hi edit Toaster', 'dsadsadas'));
   this.toastr.warning('Deleted successfully');
   this.toastr.error('Deleted successfully');

  }
}

