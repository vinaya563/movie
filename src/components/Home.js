// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Movie Ratings</h1>
            <p>You dont need to have an account to see the lists created by our users</p>
            <div className="home-buttons">
                <Link to="/WatchlistPublic" className="home-button">See Our Top Rated Movies</Link>
                <Link to="/WatchedPublic" className="home-button">Rotten Oranges</Link>
                <p>Have any Feedback?</p>
                <div className="auth-buttons">
                    <Link to="/Signup" className="home-button">Create an Account</Link>
                    <Link to="/signin" className="home-button">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
