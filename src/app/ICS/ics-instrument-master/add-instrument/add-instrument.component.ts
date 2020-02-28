import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  gotoIcsMaster() {
   this.routes.navigate(['/icshome']);
  }
}
