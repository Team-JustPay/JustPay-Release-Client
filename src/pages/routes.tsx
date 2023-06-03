import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as PageRoutes, Route as PageRoute } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const PayPage = lazy(() => import('pages/Pay'));
const PostPage = lazy(() => import('pages/Post'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <PageRoutes>
          <PageRoute path="/" element={<HomePage />} />
          <PageRoute path="/pay" element={<PayPage />} />
          <PageRoute path="/post/:postSeq" element={<PostPage />} />
        </PageRoutes>
      </Suspense>
    </BrowserRouter>
  );
}
