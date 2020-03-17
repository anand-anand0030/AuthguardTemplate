import { Component, AfterViewInit} from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { GridLine } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-ics-parameter',
  templateUrl: './ics-parameter.component.html',
  styleUrls: ['./ics-parameter.component.css']
})
export class IcsParameterComponent implements AfterViewInit {
   closeResult: string;
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

    // End of 2 drop down
// start of table field
        // constructor(private toastr: ToastrService) {}
      public data: object[];
      public lines: GridLine;

        // tslint:disable-next-line:use-life-cycle-interface
        ngOnInit(): void {
            this.data =
            [
               {
              SrNo: '01',
                 Parameter: 'Column temperature',
                 NominalValue: '15°C' ,
                 UpperRange: '20°C',
                LowerRange: '10°C'
               },
              // {
              //      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
              //  ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
              //     ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
              //  }
            ];
            this.lines = 'Both';
        }
        ngAfterViewInit() {}

        editParameter() {
         // alert('hi edit');
          this.toastr.success('Hi edit Toaster'); // msg,title,override previousToastMessage
          // console.log(this.toastr.success('Hi edit Toaster', 'dsadsadas'));
         this.toastr.warning('Deleted successfully');
         this.toastr.error('Deleted successfully');
        }

// Start of modal ( add parameter pop up)

// tslint:disable-next-line:member-ordering

constructor(private modalService: NgbModal , private toastr: ToastrService) {}

  addparameter(content) {
    // this.modalService.open(content, { centered: true, size: 'lg' });
    this.modalService.open(content, { centered: true, size: 'sm', backdrop  : 'static',
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

