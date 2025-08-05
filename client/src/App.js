import React, { useState } from 'react';
import SubmitStory from './components/SubmitStory';
import StoryList from './components/StoryList';

function App() {
  const [stories, setStories] = useState([]);

  const handleStorySubmit = (story) => {
    setStories(prev => [...prev, story]);
  };

  return (
    <div>
      <SubmitStory onSubmit={handleStorySubmit} />
      <StoryList stories={stories} />
    </div>
  );
}

export default App;
