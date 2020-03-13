import { Component, AfterViewInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ics',
  templateUrl: './ics-instrument-master.component.html',
  styleUrls: ['./ics-instrument-master.component.css']
})
export class IcsComponent implements AfterViewInit {
   public data: object[];

constructor(private toastr: ToastrService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
      this.data =
      [
        // {
        //   SrNo:,
        //   InstrumentId:,
        //   InstrumentName:,
        //   Make:,
        //   Model:,
        //   Qualification:,
        //   Availability:,
        //   URSNoLink:,
        //   PONoLink:,
        //   DeliveryDate:,
        //   ManufacturersSrNo:

        // },
        {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
        }];
  }


  ngAfterViewInit() {}

  editInstrument() {
   // alert('hi edit');
    this.toastr.success('Hi edit Toaster'); // msg,title,override previousToastMessage
    // console.log(this.toastr.success('Hi edit Toaster', 'dsadsadas'));
   this.toastr.warning('Deleted successfully');
   this.toastr.error('Deleted successfully');

  }

}

