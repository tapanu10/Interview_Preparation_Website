// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Allroutes from './Allroutes';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Allroutes />
    </Router>
  );
};

export default App;
