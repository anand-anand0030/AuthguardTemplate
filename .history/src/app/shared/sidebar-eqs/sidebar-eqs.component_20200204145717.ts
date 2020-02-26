import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/menu-items';
import { RouteInfo } from '../sidebar/sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-sidebar-eqs',
  templateUrl: './sidebar-eqs.component.html',
  styleUrls: ['./sidebar-eqs.component.css']
})
export class SidebarEqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
