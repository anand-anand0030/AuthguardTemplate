import { Component, OnInit, HostListener } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { IcsfullComponent } from 'src/app/layouts/icsfull/icsfull.component';
import * as headerGlobalVariable from 'src/app/layouts/globalHeader';
import { environment,options } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {}

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = environment.showMobileMenu;

  public expandLogo = false;

  // options = {
  //   theme: 'light',
  //   dir: 'ltr',
  //   layout: 'vertical',
  //   sidebartype: 'full',
  //   sidebarpos: 'fixed',
  //   headerpos: 'fixed',
  //   boxed: 'full',
  //   navbarbg: 'skin6',
  //   sidebarbg: 'skin1',
  //   logobg: 'skin1'
  // };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/starter']);
    }
    this.defaultSidebar = options.sidebartype;
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
          options.sidebartype = 'mini-sidebar';
        } else {
          options.sidebartype = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          options.sidebartype = 'mini-sidebar';
        } else {
          options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() { debugger;
    switch (options.sidebartype) {
      case 'full':
      case 'iconbar':
        options.sidebartype = 'mini-sidebar';
        break;

      case 'overlay':
        environment.showMobileMenu = !environment.showMobileMenu;
        this.showMobileMenu = environment.showMobileMenu;

        break;

      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          options.sidebartype = 'full';
        } else {
          options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }
}
