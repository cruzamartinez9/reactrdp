import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('No token found!');
      history.push('/login');  // Redirect to login if no token
      return;
    }

    // Fetch vaults from 1Password
    const fetchVaults = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/vaults', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Vaults:', response.data);
        // You can store the vaults in state or context and redirect to the app
        history.push('/app');
      } catch (error) {
        console.error('Error fetching vaults:', error);
      }
    };

    fetchVaults();
  }, [history]);

  return <div>Loading...</div>;
};

export default Callback;
