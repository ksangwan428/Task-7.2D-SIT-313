// QuestionsHomePage.jsx
import React, { useState } from 'react';
import './QuestionsHomePage.css'; // Import a CSS file for styling (create this file)

function QuestionsHomePage() {
  // Define a state variable for the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Define an array of example questions (you can replace this with data from an API or database)
  const questions = [
    { id: 1, title: 'Difference between hooks and class components?', content: 'I am confused about hooks and class components in React. Can someone explain?' },
    { id: 2, title: 'CSS-in-JS: Good or bad?', content: 'I have been hearing about CSS-in-JS. Is it a good practice or should I stick with traditional CSS?' },
    { id: 5, title: 'How to handle state in React?', content: 'Should I use context, Redux, MobX, or something else?' }
    // Add more questions as needed
  ];

  // Filter questions based on the search query
  const filteredQuestions = questions.filter(question =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="questions-home">
      <h1>Questions Home Page</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Display filtered questions */}
      <ul className="question-list">
        {filteredQuestions.map((question) => (
          <li key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsHomePage;