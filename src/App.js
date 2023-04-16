import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './screens/Homepage';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import Projects from './screens/Projects';

function App() {

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
