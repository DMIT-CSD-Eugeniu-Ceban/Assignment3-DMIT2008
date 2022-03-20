import React from 'react'
//import DashBoardPage from './pages/dashboard/DashBoardPage'

import { Routes, Route } from "react-router-dom"


import { LoginPage, DashBoardPage, PageNotFound } from './pages'

function App() {
  return (
    
    <>
    {/* <DashBoardPage /> */}
        <Routes>
          <Route path="/"   element={<LoginPage/>}/>
          <Route path="/dashboard"   element={<DashBoardPage/>}/>
          <Route path="*"   element={<PageNotFound/>}/>
        </Routes>
        </>


  );
}

export default App;

