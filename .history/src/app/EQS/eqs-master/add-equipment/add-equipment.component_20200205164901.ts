import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  gotoEqsMaster()
  {
    this.routes.navigate(['/eqshome']);
  }
}
