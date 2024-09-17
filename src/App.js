import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.min.css';
import Redirect from './Redirect';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/:slug" element={<Redirect />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
