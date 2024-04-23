import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './component/Dashboard';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Dashboard />
      <h1></h1>
    </>
  )
}

export default App