import { Component, AfterViewInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GridLine, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-ics',
  templateUrl: './ics-instrument-master.component.html',
  styleUrls: ['./ics-instrument-master.component.css']
})
export class IcsComponent implements AfterViewInit {
   public data: object[];
   public lines: GridLine;

   public filterOptions: FilterSettingsModel;

constructor(private toastr: ToastrService) {}


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
      this.data =
      [
         {
           SrNo: '01',
          InstId: 'Gx121345678',
           InstName: 'HPLC',
          Make: 'Thermofisher',
          Model: 'Ultimate 3000',
          //  Qualification:,
           Availability: 'Yes/No',
          //  URSNoLink:,
          //  PONoLink:,
          DeliveryDate: '28/02/2020',
          ManufacturersSrNo: '6784538'

         },
         {
          SrNo: '02',
         InstId: 'Gx121345678',
          InstName: 'HPLC',
         Make: 'Thermofisher',
         Model: 'Ultimate 3000',
         //  Qualification:,
          Availability: 'Yes/No',
         //  URSNoLink:,
         //  PONoLink:,
         DeliveryDate: '28/02/2020',
         ManufacturersSrNo: '6784538'

        },
        {
          SrNo: '03',
         InstId: 'Gx121345678',
          InstName: 'HPLC',
         Make: 'Thermofisher',
         Model: 'Ultimate 3000',
         //  Qualification:,
          Availability: 'Yes/No',
         //  URSNoLink:,
         //  PONoLink:,
         DeliveryDate: '28/02/2020',
         ManufacturersSrNo: '6784538'

        },
        {
          SrNo: '04',
         InstId: 'Gx121345678',
          InstName: 'HPLC',
         Make: 'Thermofisher',
         Model: 'Ultimate 3000',
         //  Qualification:,
          Availability: 'Yes/No',
         //  URSNoLink:,
         //  PONoLink:,
         DeliveryDate: '28/02/2020',
         ManufacturersSrNo: '6784538'

        },
       
      ];
        this.lines = 'Both';
        this.filterOptions = {
          type: 'Menu'
       };
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

