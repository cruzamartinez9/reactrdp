const express = require('express');
const cors = require('cors');  // Import cors
const { execFile } = require('child_process');
const app = express();

app.use(cors());  // Enable CORS for all routes
app.use(express.json());

app.post('/api/run-python-script', (req, res) => {
    const { email, secretKey, password } = req.body;

    const scriptPath = 'script.py';

    const process = execFile('python3', [scriptPath, email, secretKey, password], (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            return res.status(500).json({ success: false, error: error.message });
        }
        if (stderr) {
            console.error(`Python script stderr: ${stderr}`);
            return res.status(500).json({ success: false, error: stderr });
        }

        console.log(`Python script stdout: ${stdout}`);
        if (stdout.includes('failure condition')) { // Customize this based on your script's output
            return res.json({ success: false, error: 'Invalid credentials' });
        }

        return res.json({ success: true });
    });
});

app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
