import React, { useState, useEffect } from 'react';

// Services
import { Octokit } from 'octokit';

// Components
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Loading } from './Loading';

const Commits = ({ personalAccessToken }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const octokit = new Octokit({
    auth: personalAccessToken,
  });

  const fetchCommits = async () => {
    setLoading(true);
    try {
      const data = await octokit.paginate(octokit.rest.repos.listCommits, {
        owner: 'Kwabena-Agyeman',
        repo: 'insided-project-final',
        page: 1,
        per_page: 100,
      });
      setCommits(data);
      setLoading(false);
      console.log({ data });
    } catch (error) {
      setLoading(false);
      // Reset commits to an empty array
      setCommits([]);
      console.log('error');
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
