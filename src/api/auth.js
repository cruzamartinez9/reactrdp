// auth.js

export const login = () => {
    return fetch('/auth/login')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          return data.sessionToken;  // Return the session token
        } else {
          throw new Error('Login failed');
        }
      });
  };
  