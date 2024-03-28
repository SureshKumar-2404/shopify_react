import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import Filter from './component/Filter';
import User from './component/User';
import Contact from './component/Contact';
import Channel from './component/Channel';
import Company from './component/Company';
import Other from './component/Other';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/contact/" element={<Contact />} >
          <Route path="company" element={<Company/>} />
          <Route path="channel" element={<Channel/>} />
          <Route path="other" element={<Other/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
