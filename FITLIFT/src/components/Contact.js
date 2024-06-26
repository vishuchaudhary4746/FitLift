import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';

const Contact = () => {
    return (
        <Container style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <form noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Contact;
