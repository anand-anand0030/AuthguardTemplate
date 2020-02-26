import { Component, OnInit } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-eqs-qualification',
  templateUrl: './eqs-qualification.component.html',
  styleUrls: ['./eqs-qualification.component.css']
})
export class EqsQualificationComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {


  }

}
