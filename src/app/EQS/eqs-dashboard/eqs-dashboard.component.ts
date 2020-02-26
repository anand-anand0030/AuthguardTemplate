import { Component, OnInit } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: 'app-eqs-dashboard',
  templateUrl: './eqs-dashboard.component.html',
  styleUrls: ['./eqs-dashboard.component.css']
})
export class EqsDashboardComponent  {
  public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

    // chart data

}
  // constructor() { }

  // ngOnInit() {
  // }


