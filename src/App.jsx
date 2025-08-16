import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import Layout from './DeclarativeModes/Pages/Layout'
import About from './DeclarativeModes/Pages/About'
import Github from './DeclarativeModes/Pages/Github'
import Users from './DeclarativeModes/Pages/Users'

export default function App () {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element = {<Github />} />
          <Route path="/user?/:" element={<Users />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}