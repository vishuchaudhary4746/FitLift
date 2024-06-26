import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Workouts = () => {
    return (
        <Container style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Workout Plans
            </Typography>
            <Typography variant="body1" gutterBottom>
                Discover a variety of workout plans tailored to your needs.
            </Typography>
        </Container>
    );
};

export default Workouts;
