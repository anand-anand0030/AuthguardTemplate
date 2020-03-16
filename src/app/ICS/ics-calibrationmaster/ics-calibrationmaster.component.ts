import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-ics-calibrationmaster',
  templateUrl: './ics-calibrationmaster.component.html',
  styleUrls: ['./ics-calibrationmaster.component.css']
})
export class IcsCalibrationmasterComponent implements OnInit {
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
            text: 'IQ'
        },
        {
            text: 'IQ'
        }];
    // End of 2 drop down
// start of table field
      public data: object[];

 // uploader
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
        // tslint:disable-next-line:use-life-cycle-interface
        ngOnInit(): void {
            this.data =
            [
              // {
              //    SrNo:,
              //    InstId:,
              //    InstName:,
              //    FrequencyOfCalibration:,
              //    DateOfCalibration:,
              //    LastDateOfCalibration:,
              //    Attachment:,
              //    Notes:,
              //    Edit:
              // },
              // {
              //     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
              //     ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
              //     ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
              // }
            ];
        }

// Start of modal ( add parameter pop up)

// tslint:disable-next-line:member-ordering

constructor(private modalService: NgbModal) {}

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
}

