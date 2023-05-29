import React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Routes as PageRoutes, Route as PageRoute } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const PayPage = lazy(() => import('pages/Pay'));

export default function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <PageRoute path="/" element={<HomePage />} />
        <PageRoute path="/pay" element={<PayPage />} />
      </PageRoutes>
    </BrowserRouter>
  );
}
