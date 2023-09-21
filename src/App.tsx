import React from 'react';
//stile
import './App.css';
//componenti
import Navbar from './components/Navbar';
import Home from './components/Home';
//route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
