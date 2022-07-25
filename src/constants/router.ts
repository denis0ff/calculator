import { lazy } from 'react';

export const Routes = [
  {
    path: 'home-fc',
    element: () => lazy(() => import('@screens/Home/Home')),
    label: 'Home(FC)',
  },
  {
    path: 'home-cc',
    element: () => lazy(() => import('@screens/Home/HomeClass')),
    label: 'Home(CC)',
  },
  /* {
    path: 'settings',
    element: lazy(() => import('@CC_screens/Home')),
    label: 'Home(CC)',
  }, */
];
