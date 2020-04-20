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
    title: 'Equipment Master',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/',
    title: 'Parameter',
    icon: 'mdi mdi-account-edit',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/eqsparameter',
        title: 'Add Parameter',
        icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,  // false
        submenu: []
      },
      {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-account-edit',
        class: '',
        extralink: false,  // false
        submenu: []
      }
    ]
  },
  {
    path: '/qualification',
    title: 'Qualification',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/eqscalibrationmaster',
    title: 'Calibration',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/eqsmaintenance',
    title: 'Maintenance',
    icon: 'mdi mdi-account-edit',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/eqs-reports',
    title: 'Reports',
    icon: 'mdi mdi-account-edit',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/eqs-reports/equipmentList',
        title: 'List of equipment',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/eqs-reports/equipmentHistory',
        title: 'History of equipment',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      },
      {
        path: '/eqs-reports/calibrationReport',
        title: 'Calibration Report',
        icon: 'mdi mdi-account-edit',
        class: '',
    extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Settings',
    icon: 'mdi mdi-account-edit',
    class: 'has-arrow',
    extralink: false,
    submenu: [
    //   {
    //     path: '/component/accordion',
    //     title: 'Accordion',
    // icon: 'mdi mdi-account-edit',
    //     class: '',
    //     extralink: false, 
    //     submenu: []
    //   }
    
    {
      path: '/eqs-settings/usersettings',
      title: 'User Settings',
  icon: 'mdi mdi-account-edit',
      class: '',
      extralink: false,
      submenu: []
    },


    {
      path: '/eqs-settings/customheaderfields',
      title: 'Custom Header Fields',
  icon: 'mdi mdi-account-edit',
      class: '',
      extralink: false,
      submenu: []
    },

    {
      path: '/eqs-settings/alertsettings',
      title: 'Alert Settings',
  icon: 'mdi mdi-account-edit',
      class: '',
      extralink: false,
      submenu: []
    },
  
  ]
  },
  // {
  //   path: '',
  //   title: 'Template components',
  //   icon: 'mdi mdi-account-edit',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/component/accordion',
  //       title: 'Accordion',
  //   icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     }
  //   ]
  // }
];
