// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../components/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to MovieList page after successful sign in
            window.location.href = "/movielist"; // Replace "/movies" with your desired path
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Sign In</h2>
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
                    <button type="submit" className="auth-button">Sign In</button>
                </form>
                {error && <p className="auth-error">{error}</p>}
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="auth-link">Create one</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
