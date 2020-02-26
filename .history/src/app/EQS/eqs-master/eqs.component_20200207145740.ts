import { Component, AfterViewInit } from '@angular/core';
// import { rippleEffect } from '@syncfusion/ej2-base';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './eqs.component.html',
styleUrls: ['./eqs-master.css']
})
export class EqsComponent implements AfterViewInit {
  // subtitle: string;
  // constructor() {
  //   this.subtitle = 'This is some text within a card block. EQS works!';
  // }
   public data: object[];

constructor(private toastr: ToastrService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
      this.data =
      [
        {
            OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
            ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
            ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
        },
        {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
        }];


  }


  ngAfterViewInit() {}

  editEquipment() { debugger
    alert('hi edit');
    this.toastr.success('Hi edit Toaster', 'dsadsadas');
  }

}
