import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuestionsHomePage from './components/QuestionsHomePage';
import ConditionalRendering from './components/conditionalRendering';
import PostButton from './components/PostButton';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<QuestionsHomePage />} />
          <Route path="/post" element={
            <>
              <ConditionalRendering />
              <PostButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
