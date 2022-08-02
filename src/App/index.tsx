import { Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Routes as AppRoutes } from '@constants/.';

import Loader from '@components/Loader';
import Header from '@components/Header';
import { darkTheme, lightTheme, GlobalStyles } from '@theme/.';
import { ThemeProvider } from 'styled-components';

export default () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = (theme: string) => setTheme(theme);

  return (
    <ThemeProvider
      theme={{
        config: theme === 'light' ? lightTheme : darkTheme,
        dispatch: switchTheme,
        currentTheme: theme,
      }}
    >
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
      <GlobalStyles />
    </ThemeProvider>
  );
};
