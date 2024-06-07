import React, { useState } from 'react';

const XDictionary = () => {
  // Initialize dictionary state
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  // State to hold search term and search result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Function to handle search
  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const foundWord = initialDictionary.find(entry => entry.word.toLowerCase() === normalizedSearchTerm);
    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>Definition:</div>
      <div>{searchResult}</div>
    </div>
  );
};

export default XDictionary;
