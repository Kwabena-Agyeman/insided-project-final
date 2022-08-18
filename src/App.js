import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import Nav from './Components/Nav';
import particlesOptions from './particles.json';

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className='App'>
      <Particles options={particlesOptions} init={particlesInit} />
      <Nav />
    </div>
  );
}

export default App;
