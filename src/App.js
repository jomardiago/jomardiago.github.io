import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import BuildIcon from '@material-ui/icons/Build';
import 'fontsource-roboto';
import './styles.css';

function App() {
    return (
        <Container className='main-container'>
            <Paper elevation={3} className='main-paper'>
                <Typography variant='h4'>
                    <FaceIcon /> Jose Mari A. Diago
                </Typography>
                <Typography variant='h4'>
                    <BuildIcon /> Rebuilding my website, please come back later...
                </Typography>
            </Paper>
        </Container>
    )
}

export default App;
