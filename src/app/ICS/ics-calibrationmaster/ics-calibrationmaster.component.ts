import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-ics-calibrationmaster',
  templateUrl: './ics-calibrationmaster.component.html',
  styleUrls: ['./ics-calibrationmaster.component.css']
})
export class IcsCalibrationmasterComponent implements OnInit {

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
              //     OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
              //     ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
              //     ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
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

addcalibration(content3) {
  this.modalService.open(content3, { centered: true });
}


      }


