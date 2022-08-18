import React, { useState } from 'react';

// Components
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Commits = () => {
  const [commits, setCommits] = useState([]);
  return (
    <Container fluid className='py-2'>
      <Container className='d-flex-column justify-content-between align-items-center'>
        <div>
          <span>
            Github user : <h4>Owner Name</h4>
          </span>
          <span>
            Repo name :<h4>Repo Name</h4>
          </span>
        </div>
        <Button className='me-2' size='sm' variant='success'>
          Refresh
        </Button>
        <Button disabled size='sm' variant='secondary'>
          Automatic refresh in 30 secs
        </Button>
      </Container>
      {commits.map((el, index) => {
        return <p>Commit goes here</p>;
      })}
    </Container>
  );
};

export default Commits;
