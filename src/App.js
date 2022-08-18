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
import Commits from './Components/Commits';

function App() {
  const [personalAccessToken, setPersonalAccessToken] = useState(
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
        {!personalAccessToken ? (
          <AccessTokenModal setPersonalAccessToken={setPersonalAccessToken} />
        ) : (
          <Commits
            personalAccessToken={personalAccessToken}
            setPersonalAccessToken={setPersonalAccessToken}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
