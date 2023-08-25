import React from 'react';

import { Footer, Blog, Header, TechStack } from './containers';
import { Navbar } from './components';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <TechStack />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;