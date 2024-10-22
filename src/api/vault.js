// vault.js

export const getVaultItems = (sessionToken) => {
    return fetch('/api/get-vault-items', {
      headers: {
        'Authorization': `Bearer ${sessionToken}`
      }
    })
      .then(response => response.json())
      .then(items => {
        return items;  // Return the vault items
      });
  };
  