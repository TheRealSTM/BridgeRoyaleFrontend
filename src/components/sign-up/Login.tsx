import { Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

interface LoginInterface {
    email: string,
    password: string,
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginInterface>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        console.log("Submit was pressed")
        console.log(formData);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">Login</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoFocus
                value={formData.password}
                onChange={handleChange}
            />
        </Container>
    );
}

export default Login