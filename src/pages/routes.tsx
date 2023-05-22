import React from 'react';
import { BrowserRouter, Routes as PageRoutes, Route as PageRoute } from 'react-router-dom';

import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <PageRoute path="/" element={<Home />} />
      </PageRoutes>
    </BrowserRouter>
  );
}
