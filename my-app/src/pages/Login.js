// Login.js
import React from 'react';

const Login = () => {
    const handleLogin = () => {
        const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual client ID
        const redirectUri = 'http://localhost:3000/callback'; // Ensure this matches your OAuth setup
        const scope = 'YOUR_SCOPES'; // Define your required scopes
        const authUrl = `https://my.1password.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
        window.location.href = authUrl; // Redirect to the 1Password authorization page
    };

    return (
        <div>
            <h1>Login to 1Password</h1>
            <button onClick={handleLogin}>Login with 1Password</button>
        </div>
    );
};

export default Login;
