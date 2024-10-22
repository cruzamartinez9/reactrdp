import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Setup from './components/Setup';
import Login from './components/Login';

const App = () => {
    const setupComplete = localStorage.getItem('setupComplete');

    return (
        <Router basename="/reactrdp">  {/* This was the key part */}
            <Routes>
                <Route path="/setup" element={<Setup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={setupComplete ? <Navigate to="/login" /> : <Navigate to="/setup" />} />
            </Routes>
        </Router>
    );
};

export default App;
