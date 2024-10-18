import axios from 'axios';

const apiUrl = 'https://localhost:8000'; // Your 1Password Connect API URL

export const getVaultItems = async (accessToken) => {
    const response = await axios.get(`${apiUrl}/v1/vaults`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};
