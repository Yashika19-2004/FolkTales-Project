import React from 'react';

const StoryList = ({ stories }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2>📚 Submitted Stories</h2>
      {stories.length === 0 ? (
        <p>No stories submitted yet.</p>
      ) : (
        stories.map((story, index) => (
          <div key={index} style={{
            backgroundColor: '#f3f3f3',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{story.title}</h3>
            <p><strong>Category:</strong> {story.category}</p>
            <p><strong>Language:</strong> {story.language}</p>
            <p><strong>Story:</strong> {story.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StoryList;
