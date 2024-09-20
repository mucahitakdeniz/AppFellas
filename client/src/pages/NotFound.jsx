import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="h6">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/" 
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
