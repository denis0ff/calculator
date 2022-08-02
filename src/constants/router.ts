import { lazy } from 'react';

export const Routes = [
  {
    path: 'home-cc',
    element: () => lazy(() => import('@screens/Home/HomeClass')),
    label: 'Home(CC)',
  },
  {
    path: 'home-fc',
    element: () => lazy(() => import('@screens/Home/Home')),
    label: 'Home(FC)',
  },
  {
    path: 'settings',
    element: () => lazy(() => import('@screens/Settings')),
    label: 'Settings',
  },
];
