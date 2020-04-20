import { Component, AfterViewInit } from '@angular/core';
// import { rippleEffect } from '@syncfusion/ej2-base';
import { ToastrService } from 'ngx-toastr';
import { GridLine, FilterSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  templateUrl: './eqs.component.html',
styleUrls: ['./eqs-master.css']
})
export class EqsComponent implements AfterViewInit {
  public data: object[];
   public lines: GridLine;
   public filterOptions: FilterSettingsModel;

constructor(private toastr: ToastrService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
      this.data =
      [
        //  {
        //    SrNo: '01',
        //   InstrumentId: 'Gx121345678',
        //    InstrumentName: 'HPLC',
        //   Make: 'Thermofisher',
        //   Model: 'Ultimate 3000',
        //   //  Qualification:,
        //    Availability: 'Yes/No',
        //   //  URSNoLink:,
        //   //  PONoLink:,
        //   DeliveryDate: '28/02/2020',
        //   ManufacturersSrNo: '6784538'

        //  },
        // {
        //     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        //      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        //      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
        //  }
      ];
        this.lines = 'Both';
        this.filterOptions = {
          type: 'Menu'
       };
      
  }


  ngAfterViewInit() {}

  editEquipment() {
   // alert('hi edit');
    this.toastr.success('Hi edit Toaster'); // msg,title,override previousToastMessage
    // console.log(this.toastr.success('Hi edit Toaster', 'dsadsadas'));
   this.toastr.warning('Deleted successfully');
   this.toastr.error('Deleted successfully');

  }
}

