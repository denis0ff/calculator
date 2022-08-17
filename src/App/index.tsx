import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '@components/Loader';
import Header from '@components/Header';
import { GlobalStyles } from '@theme';
import { ThemeProvider } from 'styled-components';
import Settings from '@pages/Settings';
import HomeClass from '@pages/HomeClass';
import Home from '@pages/Home';
import { useTypedSelector } from '@hooks';

export default () => {
  const { config: themeConfig } = useTypedSelector((state) => state.theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Navigate to="calculator/home-cc" replace />} />
          <Route path="calculator/home-cc" element={<HomeClass />} />;
          <Route path="calculator/home-fc" element={<Home />} />;
          <Route path="calculator/settings" element={<Settings />} />;
        </Routes>
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};
