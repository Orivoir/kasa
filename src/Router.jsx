import React from 'react'
import {RouterProvider} from "react-router-dom";
import router from './routes'
import Footer from './Footer/Footer';

export default function Router() {

  return (
    <>
    <div id="root-router">
      <RouterProvider
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
        router={router}>
      </RouterProvider>
    </div>
    <Footer />
    </>
  )
}