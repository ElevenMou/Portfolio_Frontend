import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './routes/Homepage';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import Projects from './routes/Projects';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  const TRACKING_ID = "G-DC1F2ECVC8";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    Aos.init({duration: 1000});
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
