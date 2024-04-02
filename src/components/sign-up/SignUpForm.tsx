import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Container } from "@mui/system";
import { TextField, Typography } from '@mui/material';

interface SignUpFormState {
    username: string;
    email: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormState>({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        console.log("Submit was pressed")
        console.log(formData);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
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
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  value={formData.username}
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
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"  
                >
                  Submit
                </Button>

            </form>
        </Container>
    )
}

export default SignUpForm;