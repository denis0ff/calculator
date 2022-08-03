import { lazy } from 'react';

export const Routes = [
  {
    path: 'calculator/home-cc',
    element: () => lazy(() => import('@screens/Home/HomeClass')),
    label: 'Home(CC)',
  },
  {
    path: 'calculator/home-fc',
    element: () => lazy(() => import('@screens/Home/Home')),
    label: 'Home(FC)',
  },
  {
    path: 'calculator/settings',
    element: () => lazy(() => import('@screens/Settings')),
    label: 'Settings',
  },
];
