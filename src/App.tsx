import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SignUp from './components/SignUp';
import Login from './components/Login';

function SignUpPage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username') || '';
  return <SignUp defaultUsername={username} />;
}

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;