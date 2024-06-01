// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../components/Firebase';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Account created successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Sign Up</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                {error && <p className="auth-error">{error}</p>}
                {success && <p className="auth-success">{success}</p>}
                <p>
                    Already have an account?{' '}
                    <Link to="/signin" className="auth-link">Back to login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
