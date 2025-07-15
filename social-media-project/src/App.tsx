import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Profile, } from './pages/Profile';
import { CreatePost } from './pages/create-post/Create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Navbar/>
      </div>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/createpost" element={<CreatePost/>} />
    <Route path="*" element={<h1>404</h1>} />
  </Routes>
</Router>

    </div>
  );
}

export default App;
