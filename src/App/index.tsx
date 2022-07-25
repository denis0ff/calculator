import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Routes as AppRoutes } from '@constants/router';

import Loader from '@components/Loader';
import Header from '@components/Header';

export default () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to={AppRoutes[0].path} replace />} />
        {AppRoutes.map(({ path, element }) => {
          const LazyElement = element();
          return <Route key={path} path={path} element={<LazyElement />} />;
        })}
      </Routes>
    </Suspense>
  </>
);
