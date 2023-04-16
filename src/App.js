import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './screens/Homepage';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import Projects from './screens/Projects';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function App() {
  const TRACKING_ID = "G-DC1F2ECVC8";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, [])

  return (
    <div className="app">
      <Header />
      <main className='app-main'>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
