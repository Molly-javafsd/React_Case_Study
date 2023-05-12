import React from 'react'
import { Typography, TextField, Button, Box, Container, AppBar } from '@mui/material'
import { useState } from 'react'

import { Link } from 'react-router-dom';
import LoginComponent from '../LoginComponent';


export default function Registration() {
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        username: '',
        password: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistration((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    
    return (
        <>



<Link href="/login" align='center'>Already a User? Login Here</Link>
<LoginComponent />
            <Box py={3} bgcolor='grey.200'>
                <Container maxWidth='md'>
                    <Typography variant='h6' align='centre' gutterBottom>
                        Make A Registration
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id='name'
                            name='name'
                            label='Your Name'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id='email'
                            name='email'
                            label='Your Email'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id='phone'
                            name='phone'
                            label='Your Phone Number'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            id='username'
                            name='username'
                            label='Your Username'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.username}
                            onChange={handleChange}
                        />
                        <TextField
                            id='password'
                            name='password'
                            label='Your password'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.password}
                            onChange={handleChange}
                        />
                        <TextField
                            id='date'
                            name='date'
                            label='Date of Birth'
                            type='date'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            required
                            value={registration.date}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button type='submit' variant='contained' color='success' fullWidth>
                            Register Now
                        </Button>
                    </form>
                </Container>
            </Box>
        
         
        </>
    )
}