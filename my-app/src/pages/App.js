import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Callback from './Callback'; // Adjust the path if necessary
import Login from './Login'; // Adjust the path if necessary

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Redirect to Login */}
                <Route path="/callback" element={<Callback />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
