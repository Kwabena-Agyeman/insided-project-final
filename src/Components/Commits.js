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
import Commit from './Commit';

const Commits = ({ personalAccessToken, setPersonalAccessToken }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(30);
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

  const reFreshCommits = () => {
    setTimer(30);
    fetchCommits();
  };

  const resetToken = () => {
    sessionStorage.setItem('inSidedProjectPAT', null);
    setPersonalAccessToken(null);
  };

  useEffect(() => {
    fetchCommits();
  }, [config]);

  useEffect(() => {
    if (timer === 0) {
      reFreshCommits();
    }
  }, [timer]);

  useEffect(() => {
    if (error) return;

    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className='my-4'>
        <h5>
          There was an issue in your Github Token, Please re-enter your key!
        </h5>
        <Button
          className='my-2'
          size='sm'
          variant='warning'
          onClick={() => {
            resetToken();
          }}
        >
          Refresh Access Token
        </Button>
      </div>
    );
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
        <Button
          className='me-2'
          size='sm'
          variant='success'
          onClick={() => {
            reFreshCommits();
          }}
        >
          Refresh
        </Button>
        <Button
          size='sm'
          className='me-2'
          variant='warning'
          onClick={() => resetToken()}
        >
          Reset access token
        </Button>
        <Button disabled size='sm' variant='secondary'>
          Automatic refresh in - {timer} {timer === 1 ? 'second' : 'seconds'}
        </Button>
      </Container>
      {commits.map((el, index) => {
        return (
          <Commit
            key={el.sha}
            data={el}
            index={index}
            length={commits.length}
          />
        );
      })}
    </Container>
  );
};

export default Commits;
