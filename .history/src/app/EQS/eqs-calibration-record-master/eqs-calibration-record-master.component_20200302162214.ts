import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eqs-calibration-record-master',
  templateUrl: './eqs-calibration-record-master.component.html',
  styleUrls: ['./eqs-calibration-record-master.component.css']
})
export class EqsCalibrationRecordMasterComponent implements OnInit {
  public dropEle: HTMLElement;
  public items: ItemModel[] = [
    {
        text: 'All'
    },
    {
        text: 'Equipment 1'
    },
    {
        text: 'Equipment 2'
    }];
    closeResult: string;
  data: object[];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.data =
    [
      {
          EqipmentId: 10248, CustomerID: 'VINET', FrequencyOfCalibration: 5, StartDate: new Date(8364186e5),
          EndDate: new Date(8364186e5), DueDate: new Date(8364186e5),
          Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      },
      {
        EqipmentId: 10248, CustomerID: 'VINET', FrequencyOfCalibration: 5, StartDate: new Date(8364186e5),
        EndDate: new Date(8364186e5), DueDate: new Date(8364186e5),
        Purpose: 'Vins et alcools Chevalier', Remark: 'Reims'
      }
    ];
  }

  openAddCalibrationModal(content) {
    // this.modalService.open(content, { centered: true, size: 'lg' });
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then(
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
