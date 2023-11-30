// Allroutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Resources from './Pages/Resources/Resources';
import Auth from './Pages/Auth/Auth';
import OppsQA from './Pages/Opps/opps';
import OsQA from './Pages/OS/Os';
import DbmsQA from './Pages/DBMS/Dbms';
import Practice from './Pages/Practice/Practice';
import Resume from './Pages/Resume/Resume';
import Interview from './Pages/Interview/Interview';
import Puzzels from './Pages/Puzzels/Puzzels';
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Oops" element={<OppsQA />} />
      <Route path="/Os" element={<OsQA />} />
      <Route path="/Dbms" element={<DbmsQA />} />
      <Route path="/Practice" element={<Practice />} />
      <Route path="/resume" element={<Resume/>} />
      <Route path='/interview' element={<Interview/>}/>
      <Route path='/puzzels' element={<Puzzels/>}/>
    </Routes>
  );
};

export default Allroutes;
