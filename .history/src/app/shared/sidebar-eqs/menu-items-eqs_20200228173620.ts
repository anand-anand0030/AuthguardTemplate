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
    path: '/eqshome',
    title: 'EQS-Master',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/eqshome',
        title: 'Add Parameter',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,  //false
        submenu: []
      },
      {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,  //false
        submenu: []
      }
    ]
  },
  {
    path: '/qualification',
    title: 'Qualification',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Maintainance',
    icon: 'mdi mdi-gauge',
    class: '',
    // extralink: false,
    extralink: true,
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
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
    extralink: true,  //false
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Settings',
    icon: 'mdi mdi-bullseye',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
    icon: 'mdi mdi-adjust',
        class: '',
        extralink: true, //set false to display the submenu
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Template components',
    icon: 'mdi mdi-bullseye',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
    icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
