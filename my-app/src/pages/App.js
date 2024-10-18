import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [vaults, setVaults] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchVaults = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/vaults', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setVaults(response.data);
      } catch (error) {
        console.error('Error fetching vaults:', error);
      }
    };

    fetchVaults();
  }, [token]);

  return (
    <div>
      <h1>Client Manager</h1>
      {vaults.length === 0 ? (
        <p>No vaults available.</p>
      ) : (
        <ul>
          {vaults.map(vault => (
            <li key={vault.id}>
              {vault.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
