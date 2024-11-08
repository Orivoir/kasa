import React from 'react'
import {createHashRouter, redirect} from "react-router-dom";

import NotFound from "./Pages/Not-Found"

import Home from './Pages/Home';
import Logement from './Pages/Logement';
import About from "./Pages/About"
import {getLogementById, getLogements} from "./api"

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    loader: () => {
      return getLogements()
    }
  },
  {
    path: "logement/:id",
    element: <Logement />,
    errorElement: <NotFound />,
    loader: ({request, params}) => {

      const logement = getLogementById(params.id)

      if(!logement) {
        return redirect("/oops")
      }

      return logement
    }
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />
  },
  {
    path: "/oops",
    element: <NotFound />
  }
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  },

})

export default router