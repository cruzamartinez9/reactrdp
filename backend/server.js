const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let sessionToken = null;  // Store the session token securely on the backend

// Route to trigger the 1Password CLI and log in the user
app.post('/auth/login', (req, res) => {
  exec('op signin --session', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ success: false, message: 'Authentication failed' });
    }

    // Extract sessionToken from CLI output (stdout)
    sessionToken = stdout.match(/OP_SESSION_.*=(.*)/)[1];
    console.log('Session token received:', sessionToken);

    res.json({ success: true, sessionToken });
  });
});

// Route to securely retrieve the session token
app.get('/auth/session', (req, res) => {
  if (!sessionToken) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }

  res.json({ success: true, sessionToken });
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
