import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './screens/Homepage';
import Header from './components/Header';
import React from 'react';

function App() {

  return (
    <div className="app">
      <Header />
      <main className='app-main'>
      <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
