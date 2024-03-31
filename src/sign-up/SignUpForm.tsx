import React, { useState } from 'react';

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
        console.log(formData);
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                   type="password"
                   id="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignUpForm;