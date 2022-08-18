import React from 'react';

// Components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Commit = ({ data, index, length }) => {
  const { commit } = data;
  let date = new Date(commit?.author?.date).toUTCString();

  return (
    <Card className='my-4' style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>
          {`${length - index}. `}
          {commit?.message}
        </Card.Title>
        <Card.Text>{`${date} by ${commit?.author?.name}`}</Card.Text>
        <Button target='_blank' href={data?.html_url} size='sm'>
          View commit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Commit;
