//import css from './App.module.css';
import React, { lazy, Suspense } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import {Loader} from './components/Loader/Loader.jsx'
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const About = lazy(() => import('./Pages/About/About.jsx'));
const Contact = lazy(() => import('./Pages/Contacts/Contacts.jsx'));
 
const App = () => {
  return (
   
    <div>
      <Header/>
      <main>
        <Suspense fallback={<Loader/>}>
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