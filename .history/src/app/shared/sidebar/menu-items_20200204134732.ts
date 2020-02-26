import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: '',
  //   title: 'Personal',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },
  {
    path: '/starter',
    title: 'EQS-Master',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    project:'EQS',
    submenu: []
  },
  {
    path: '/starter',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    project:'EQS',
    submenu: []
  },
  {
    path: '/starter',
    title: 'Qualification',
    icon: 'mdi mdi-gauge',
    project:'EQS',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Maintainance',
    icon: 'mdi mdi-gauge',
    project:'EQS',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '',
  //   title: 'UI Components',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },
  {
    path: '',
    title: 'Reports',
    icon: 'mdi mdi-bullseye',
    project:'EQS',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
    project:'EQS',
    extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Settings',
    icon: 'mdi mdi-bullseye',
    project:'EQS',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
    project:'EQS',
    icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
