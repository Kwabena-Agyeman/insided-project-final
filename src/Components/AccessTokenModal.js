import React, { useState } from 'react';

// Components
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const AccessTokenModal = ({ setPersonalAccessToken }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (inputValue.length < 1) {
      setError(true);
    } else {
      setError(false);
      sessionStorage.setItem('inSidedProjectPAT', inputValue);
      setPersonalAccessToken(inputValue);
    }
  };

  return (
    <Modal size='lg' show={true} aria-labelledby='AccessTokenModal'>
      <Modal.Header>
        <Modal.Title>
          Please enter your public access token to continue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor='access-token'>Personal Access Token</Form.Label>
        <InputGroup className='mb-3'>
          <Form.Control
            id='access-token'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputGroup>
        {error && (
          <Form.Text className='text-danger'>
            Please enter your public access token
          </Form.Text>
        )}
        <br />
        <Button
          className='my-1'
          variant='primary'
          size='lg'
          onClick={() => onSubmit()}
        >
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AccessTokenModal;
