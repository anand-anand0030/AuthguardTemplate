import { Component, OnInit } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridLine, FilterSettingsModel } from '@syncfusion/ej2-angular-grids/public_api';
import { EmitType } from '@syncfusion/ej2-base';
 import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { FilterService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-eqs-qualification',
  templateUrl: './eqs-qualification.component.html',
  providers:[FilterService],
  styleUrls: ['./eqs-qualification.component.css']
})
export class EqsQualificationComponent implements OnInit {

  closeResult: string;
  public dateValue: Date = new Date();
  public filterOptions: FilterSettingsModel;
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
  // public items: ItemModel[] = [
  //   {
  //       text: 'Equipment Id'
  //   },
  //   {
  //       text: 'Equipment Id'
  //   },
  //   {
  //       text: 'Equipment Id'
  //   }];
  //   public items1: ItemModel[] = [
  //     {
  //         text: 'Equipment Name'
  //     },
  //     {
  //         text: 'Equipment Name'
  //     },
  //     {
  //         text: 'Equipment Name'
  //     }];
      public items2: ItemModel[] = [
        {
            text: 'IQ'
        },
        {
            text: 'IO'
        },
        {
          text: 'OP'
      },
      {
        text: 'PQ'
    },
        {
            text: 'OQ'
        }];
        public items3: ItemModel[] = [
          // {
          //     text: 'Inst Name'
          // },
          // {
          //     text: 'Inst Name'
          // },
          // {
          //     text: 'Inst Name'
          // }
        ];
    // End of 2 drop down
// start of table field
      public data: object[];
      public lines: GridLine;

      // uploader
    //   public path: Object = {
    //     saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    //     removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    //   };
    //     public onUploadSuccess(args: any): void  {
    //       if (args.operation === 'upload') {
    //           console.log('File uploaded successfully');
    //       }
    //   }

    // public onUploadFailure(args: any): void  {
    // console.log('File failed to upload');
    // }

    // tslint:disable-next-line:member-ordering
    public dropEle: HTMLElement;
        // tslint:disable-next-line:use-life-cycle-interface

        // folder manager
        public ajaxSettings: object;
        public view: string;
        public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/'; // replace with or api to read and upload files
        // tslint:disable-next-line:use-life-cycle-interface
        ngOnInit(): void {
            this.data =
            [
              //  {
                  //  SrNo: '01',
                  //   InstId: 'Gx121345678',
                  //   InstName: 'HPLC',
                  //   DateOfQualification: '03/03/2020',
                  //  TypeOfQualification: 'IQ', 
                  //   PerformedBy: 'Shruti'
                    // Notes:,
                //  Edit:
              //  },
              //  {
              //     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
              //     ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
              //   ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
              //  }
          ];
            this.lines = 'Both';
            this.filterOptions = {
              type: 'Menu'
           };
          
            // uploader
            this.dropEle = document.getElementById('droparea');
            // folder manager
            this.ajaxSettings = {
              url: this.hostUrl + 'api/FileManager/FileOperations',
              getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
              uploadUrl: this.hostUrl + 'api/FileManager/Upload',
              downloadUrl: this.hostUrl + 'api/FileManager/Download'
          };
          // Initial view of File Manager is set to details view
          this.view = 'Details';
        }
 // File Manager's created event function
 onCreate(args: any) {
  console.log('File Manager has been created successfully');
}
// Start of modal ( add parameter pop up)

// tslint:disable-next-line:member-ordering

constructor(private modalService: NgbModal , private toastr: ToastrService) {}

  // addqualification(content3) {
  //   this.modalService.open(content3, { centered: true });
  // }

  openAddQualificationModal(content) {
    // this.modalService.open(content, { centered: true, size: 'lg' });
    this.modalService.open(content, { centered: true, size: 'lg', backdrop  : 'static',
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

  editQualification() {
   // alert('hi edit');
    this.toastr.success('Hi edit Toaster'); // msg,title,override previousToastMessage
    // console.log(this.toastr.success('Hi edit Toaster', 'dsadsadas'));
   this.toastr.warning('Deleted successfully');
   this.toastr.error('Deleted successfully');

  }

}

