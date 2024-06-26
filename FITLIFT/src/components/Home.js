import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container style={{ textAlign: 'center', padding: '2rem' }}>
            <Typography variant="h3" gutterBottom>
                Welcome to FitLift
            </Typography>
            <Typography variant="h6" gutterBottom>
                Your Ultimate Workout Companion
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/workouts">
                Get Started
            </Button>
        </Container>
    );
};

export default Home;
