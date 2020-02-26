import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eqs-dashboard',
  templateUrl: './eqs-dashboard.component.html',
  styleUrls: ['./eqs-dashboard.component.css']
})
export class EqsDashboardComponent implements OnInit {
 // This is for the collapse example
 public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
