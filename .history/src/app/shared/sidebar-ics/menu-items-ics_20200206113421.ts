import { RouteInfo } from '../sidebar-eqs/sidebar.metadata';

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
    path: '/icshome',
    title: 'Instrumental-Master',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/callibrationmaster',
    title: ' Calibration Record Master',
    icon: 'mdi mdi-gauge',
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
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/ics-reports/instrumentsList',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/ics-reports/instrumentsHistory',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/ics-reports/calibrationReport',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
    extralink: false,
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
        extralink: false,
        submenu: []
      }
    ]
  }
];
