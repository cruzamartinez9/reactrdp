import React, { useState } from 'react';

const Setup = () => {
    const [email, setEmail] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Error state to show error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Submitting form data:', { email, secretKey, password });
    
        try {
            const response = await fetch('http://localhost:5000/api/run-python-script', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, secretKey, password }),
            });
    
            const result = await response.json();
            console.log('Backend response:', result); // Check if result.success is false when the credentials are incorrect
    
            // Check if the Python script was successful
            if (result.success) {
                // Only save to localStorage if setup is successful
                localStorage.setItem('email', email);
                localStorage.setItem('setupComplete', true);
    
                // Redirect to login page
                window.location.href = '/reactrdp/login';
            } else {
                // Display an error message if the script failed
                setError(result.error || 'Setup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error in form submission:', error);
            setError('An error occurred while setting up. Please try again.');
        }
    };
    

    return (
        <div className="setup">
            <h1>Setup</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Secret Key:</label>
                    <input
                        type="text"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Setup;
