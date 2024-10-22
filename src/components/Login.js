import React, { useState } from 'react';

function Login({ onLogin }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginClick = () => {
    // Make a request to the backend to initiate the 1Password login
    fetch('http://localhost:5000/auth/login', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Authenticated! Session token:', data.sessionToken);
          onLogin();  // Trigger the onLogin prop to update the UI
        } else {
          setErrorMessage('Authentication failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Failed to login');
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login with 1Password</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
