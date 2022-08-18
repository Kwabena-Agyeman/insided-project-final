import React, { useCallback, useState } from 'react';

// Styles
import './App.css';

// Paticles Package
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';

// Components
import Nav from './Components/Nav';
import { Container } from 'react-bootstrap';
import AccessTokenModal from './Components/AccessTokenModal';

function App() {
  const [publicAccessKey, setPublicAccessKey] = useState(
    sessionStorage.getItem('inSidedProjectPAT')
  );
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className='App'>
      <Particles options={particlesOptions} init={particlesInit} />
      <Nav />
      <Container>
        {!publicAccessKey ? (
          <AccessTokenModal setPublicAccessKey={setPublicAccessKey} />
        ) : (
          <p>Github meun goes here</p>
        )}
      </Container>
    </div>
  );
}

export default App;
