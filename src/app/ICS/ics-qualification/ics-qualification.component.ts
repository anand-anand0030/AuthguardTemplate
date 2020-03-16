import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { Edit } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-ics-qualification',
  templateUrl: './ics-qualification.component.html',
  styleUrls: ['./ics-qualification.component.css']
})
export class IcsQualificationComponent implements OnInit {
  closeResult: string;
  public dateValue: Date = new Date();

  public items: ItemModel[] = [
    {
        text: 'Inst Id'
    },
    {
        text: 'Inst Id'
    },
    {
        text: 'Inst Id'
    }];
    public items1: ItemModel[] = [
      {
          text: 'Inst Name'
      },
      {
          text: 'Inst Name'
      },
      {
          text: 'Inst Name'
      }];
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
    // End of 2 drop down
// start of table field
      public data: object[];

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
        ngOnInit(): void {
            this.data =
            [
              // {
                  //  SrNo:,
                  //  InstId:,
                  //  InstName:, 
                  //  LastPerformDate:,
                  //  NextDueDate:,
                  //  SateOfQualification:,
                  //  TypeOfQualification:,
                  //  Attachment:, 
                  //  Notes:,
                // Edit:
              // },
              // {
              //     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
              //     ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
              //     ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
              // }
            ];

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

constructor(private modalService: NgbModal) {}

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



}

