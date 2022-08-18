import React, { useState, useEffect } from 'react';

// Services
import { Octokit } from 'octokit';

// Helpers
import { config } from '../config';
import { toast } from 'react-toastify';

// Components
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Loading } from './Loading';

const Commits = ({ personalAccessToken }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const octokit = new Octokit({
    auth: personalAccessToken,
  });

  const fetchCommits = async () => {
    setLoading(true);
    try {
      const data = await octokit.paginate(octokit.rest.repos.listCommits, {
        owner: config.owner,
        repo: config.repo,
        page: config.page,
        per_page: config.per_page,
      });
      setCommits(data);
      setLoading(false);
      console.log({ data });
    } catch (error) {
      setError(true);
      setLoading(false);
      // Reset commits to an empty array
      setCommits([]);
      if (error.status === 401) {
        toast('Incorrect credentials', {
          type: 'error',
        });
      } else
        toast(error.message, {
          type: 'error',
        });
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
