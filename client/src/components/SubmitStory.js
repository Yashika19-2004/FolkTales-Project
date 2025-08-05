import React, { useState, useRef } from 'react';
import { franc } from 'franc-min';
import './SubmitStory.css';

const SubmitStory = () => {
  const [formData, setFormData] = useState({
    name: '',
    language: 'telugu',
    category: 'folk',
    content: ''
  });

  const [isListening, setIsListening] = useState(false);
  const [submittedStories, setSubmittedStories] = useState([]);
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedStories([...submittedStories, formData]);
    alert('✅ Your story has been submitted successfully!');
    setFormData({ name: '', language: 'telugu', category: 'folk', content: '' });
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
    clearTimeout(timeoutRef.current);
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('⚠️ Web Speech API is not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = formData.language === 'telugu' ? 'te-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      const detectedLang = franc(transcript);

      const expectedLangCode = formData.language === 'telugu' ? 'tel' : 'eng';

      if (detectedLang !== expectedLangCode) {
        alert(`❌ Language Mismatch Detected! Expected: ${formData.language.toUpperCase()}, but detected: ${detectedLang.toUpperCase()}`);
        stopListening();
        return;
      }

      setFormData((prev) => ({
        ...prev,
        content: prev.content + ' ' + transcript
      }));

      stopListening();
    };

    recognition.onerror = (event) => {
      alert('❌ Speech error: ' + event.error);
      stopListening();
    };

    recognition.onend = () => {
      setIsListening(false);
      clearTimeout(timeoutRef.current);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);

    timeoutRef.current = setTimeout(() => {
      stopListening();
    }, 8000);
  };

  const toggleMic = () => {
    isListening ? stopListening() : startListening();
  };

  return (
    <div className="submit-container">
      <h2>🎤 Submit a Folk Tale</h2>

      {isListening && <p className="listening-indicator">🎧 Listening...</p>}

      <form onSubmit={handleSubmit} className="submit-form">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Language:</label>
        <select name="language" value={formData.language} onChange={handleChange}>
          <option value="telugu">Telugu</option>
          <option value="english">English</option>
        </select>

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="folk">Folk Story</option>
          <option value="proverb">Proverb</option>
          <option value="myth">Mythological Tale</option>
        </select>

        <label>Your Story:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} required />

        <button type="button" onClick={toggleMic}>
          {isListening ? '🛑 Stop' : '🎤 Start'}
        </button>

        <button type="submit">Submit</button>
      </form>

      {submittedStories.length > 0 && (
        <div className="story-list">
          <h3>📝 Submitted Stories</h3>
          <ul>
            {submittedStories.map((story, index) => (
              <li key={index}>
                <strong>{story.name}</strong> ({story.language}, {story.category})<br />
                {story.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubmitStory;
