import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound'
import { SiteSettings } from './SiteSettings'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" index element={<NotFound />} />
            {SiteSettings.sites}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
