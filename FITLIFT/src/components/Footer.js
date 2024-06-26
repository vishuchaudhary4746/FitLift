import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '1rem 0', backgroundColor: '#3f51b5', color: '#fff' }}>
            <Container maxWidth="lg">
                <Typography variant="body1">© 2024 FitLift. All rights reserved.</Typography>
            </Container>
        </footer>
    );
};

export default Footer;
