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
    title: 'Instrument Master',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/ics-parameter',
    title: 'Parameter',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/ics-qualification',
    title: 'Qualification',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/callibrationmaster',
    title: 'Calibration',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/ics-maintenance',
    title: 'Maintenance',
    icon: 'mdi mdi-account-edit',
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
    path: '/ics-reports',
    title: 'Reports',
    icon: 'mdi mdi-account-edit',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/ics-reports/instrumentsList',
        title: 'List of Instruments',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/ics-reports/instrumentsHistory',
        title: 'History of Instrument',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/ics-reports/calibrationReport',
        title: 'Calibration Report',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/ics-reports/usagereport',
        title: 'Usage Report',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Settings',
    icon: 'mdi mdi-account-edit',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/ics-settings/usersetting',
        title: 'User Setting',
    icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ics-settings/customheaderfield',
        title: 'Custom Header Fields',
    icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ics-settings/alertsetting',
        title: 'Alert Setting',
    icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ics-settings/instrumenttype',
        title: 'Instrument Type',
    icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,
        submenu: []
      }

    ]
  },

];
