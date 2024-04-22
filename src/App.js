//import css from './App.module.css';
import React, { lazy, Suspense } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contacts/Contacts'));
 
const App = () => {
  return (
   
    <div>
      <Header/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
   
  );
}

export default App;