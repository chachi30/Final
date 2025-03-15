import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load components for performance
const Header = lazy(() => import('./basta/Header'));
const HeroSection = lazy(() => import('./basta/HeroSection'));
const AboutMe = lazy(() => import('./basta/AboutMe'));
const Footer = lazy(() => import('./basta/Footer'));

// Loading component for Suspense
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;