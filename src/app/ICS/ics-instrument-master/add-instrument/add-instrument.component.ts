import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {
  public dateValue: Date = new Date();
  constructor(private routes: Router) { }
  ngOnInit() {
}
  gotoIcsMaster() {
   this.routes.navigate(['/icshome']);
  }

  // tslint:disable-next-line:member-ordering
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

}



