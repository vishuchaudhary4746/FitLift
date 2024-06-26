import React from 'react';
import { Container, Typography } from '@material-ui/core';

const About = () => {
    return (
        <Container style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                About FitLift
            </Typography>
            <Typography variant="body1" gutterBottom>
                FitLift is dedicated to helping you achieve your fitness goals with personalized workout plans and tracking features.
            </Typography>
        </Container>
    );
};

export default About;
