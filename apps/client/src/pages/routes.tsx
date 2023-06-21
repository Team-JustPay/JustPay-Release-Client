import React from 'react';
import { BrowserRouter, Routes as PageRoutes, Route as PageRoute } from 'react-router-dom';

import Home from './Home';
import Post from './Post';

export default function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <PageRoute path="/" element={<Home />} />
        <PageRoute path="/post/:postSeq" element={<Post />} />
      </PageRoutes>
    </BrowserRouter>
  );
}
