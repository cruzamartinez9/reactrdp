// Callback.js
import React, { useEffect } from 'react';

const Callback = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code'); // Get the authorization code
        // You would typically exchange this code for an access token here
        console.log('Authorization code:', code);
    }, []);

    return (
        <div>
            <h1>Callback Page</h1>
            <p>You can close this window now.</p>
        </div>
    );
};

export default Callback;
