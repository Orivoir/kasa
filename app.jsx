import React from 'react';
import {createRoot} from 'react-dom/client';
import Router from './src/Router';
import "./app.scss"
function App() {

  return (
    <>
      <Router />
    </>
  );
}

const root = createRoot(document.querySelector("main"));

root.render(<App />);