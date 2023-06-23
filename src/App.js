import Navbar from './components/Navbar';
import News from './components/News';

import React from 'react'

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  let pagesize = 5;
  let apikey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News api={apikey} key="general" pagesize={pagesize} country="in"  category="general" />} />
          <Route exact path="/Business" element={<News api={apikey} key="business" pagesize={pagesize} country="in"  category="business" />} />
          <Route exact path="/Entertainment" element={<News api={apikey} key="entertainment" pagesize={pagesize} country="in"  category="entertainment" />} />
          <Route exact path="/General" element={<News api={apikey} key="general" pagesize={pagesize} country="in"  category="general" />} />
          <Route exact path="/Health" element={<News api={apikey} key="health" pagesize={pagesize} country="in"  category="health" />} />
          <Route exact path="Science" element={<News api={apikey} key="science" pagesize={pagesize} country="in"  category="science" />} />
          <Route exact path="/Sports" element={<News api={apikey} key="sports" pagesize={pagesize} country="in"  category="sports" />} />
          <Route exact path="/Technology" element={<News api={apikey} key="technology" pagesize={pagesize} country="in"  category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}