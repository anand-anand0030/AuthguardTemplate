import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as headerGlobalVariable from '../globalHeader';
declare var $: any;

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icsfull-layout',
  templateUrl: './icsfull.component.html',
  styleUrls: ['./icsfull.component.css']
})
export class IcsfullComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  env = environment;
  constructor(public router: Router) {}

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  // public showMobileMenu = false;
  public showMobileMenu = this.env.showMobileMenu;
  public expandLogo = false;

  options = {
    theme: 'light',
    dir: 'ltr',
    layout: 'vertical',
    sidebartype: 'full',
    sidebarpos: 'fixed',
    headerpos: 'fixed',
    boxed: 'full',
    navbarbg: 'skin6',
    sidebarbg: 'skin1',
    logobg: 'skin1'
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/starter']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
      case 'iconbar':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  // toggleSidebarType() { debugger
  //   switch (this.options.sidebartype) {
  //     case 'full':
  //     case 'iconbar':
  //       this.options.sidebartype = 'mini-sidebar';
  //       break;

  //     case 'overlay':
  //       this.showMobileMenu = !this.showMobileMenu;
  //       break;

  //     case 'mini-sidebar':
  //       if (this.defaultSidebar === 'mini-sidebar') {
  //         this.options.sidebartype = 'full';
  //       } else {
  //         this.options.sidebartype = this.defaultSidebar;
  //       }
  //       break;

  //     default:
  //   }
  // }
}
