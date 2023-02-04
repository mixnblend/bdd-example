import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/home'
import SecondPage from '../pages/second-page'

export const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second-page" element={<SecondPage />} />
    </Routes>
  )
}

export default RoutesComponent
