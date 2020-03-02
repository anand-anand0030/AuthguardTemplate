import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
