import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ics-parameter',
  templateUrl: './ics-parameter.component.html',
  styleUrls: ['./ics-parameter.component.css']
})
export class IcsParameterComponent implements OnInit {
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
      public data: object[];

        // tslint:disable-next-line:use-life-cycle-interface
        ngOnInit(): void {
            this.data =
            [
              // {
                // SrNo:,
                // Parameter:,
                // NominalValue:,
                // UpperRange:,
                // LowerRange:
              //   
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

  addparameter(content) {
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

