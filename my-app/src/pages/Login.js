import React from 'react';

const Login = () => {
  const handleLogin = async () => {
    // Normally you would redirect to an OAuth flow or trigger a token request.
    // In this case, we'll simulate a login by directly fetching vault items.

    // Simulate login by fetching secrets
    const token = "eyJhbGciOiJFUzI1NiIsImtpZCI6InI1MjR5YWZ3bmVpZDJxajV3b3R0NmNnbnd5IiwidHlwIjoiSldUIn0.eyIxcGFzc3dvcmQuY29tL2F1dWlkIjoiRkJDM1FVQTdKRkRKRkpPUkpYUE1UT1NXVVUiLCIxcGFzc3dvcmQuY29tL3Rva2VuIjoiYkNlWjlvc3R0bDJQeDdGZUdwWHBoUGNQbVI1WHZvcHAiLCIxcGFzc3dvcmQuY29tL2Z0cyI6WyJ2YXVsdGFjY2VzcyJdLCIxcGFzc3dvcmQuY29tL3Z0cyI6W3sidSI6ImRobnN1a3JsZTdoY2JyeXFyZGUyeXYyczZtIiwiYSI6NDh9XSwiYXVkIjpbImNvbS4xcGFzc3dvcmQuY29ubmVjdCJdLCJzdWIiOiJTUkROSTJOSEhWRTdISVFZVkNBNFdZMkFDTSIsImlhdCI6MTcyOTI4MDg3MywiaXNzIjoiY29tLjFwYXNzd29yZC5iNSIsImp0aSI6InV4amlmYm16ajRvNjZ6YnM3aGczeGZ0eXhtIn0.e0Ks2XxylqnTNoUV5pDBG_yYjBNJ1lDKcR7V1pgDr-9jf7X06fjaiPuRdKkTWy-SLpAUX3JoWNNbrPCyPDr0zA";  // Replace with your token

    // Store the token (can use localStorage/sessionStorage for simplicity)
    localStorage.setItem('token', token);

    // Redirect to callback page for further action
    window.location.href = "/callback";
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with 1Password</button>
    </div>
  );
};

export default Login;
