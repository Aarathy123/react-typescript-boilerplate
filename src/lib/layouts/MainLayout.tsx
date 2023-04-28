import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'app/lib/screens/landingPage';
import Layout from './LandingLayout';
import HomePage from '../screens/home';

const MainLayout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
};

export default MainLayout;