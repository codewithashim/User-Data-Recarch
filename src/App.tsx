import { useState } from 'react'
import './Styles/App.scss'
import {
  RouterProvider,
} from "react-router-dom";
import route from './Router/Router';

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
