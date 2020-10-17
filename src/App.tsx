import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
    </Router>
  );
}

export default App;
