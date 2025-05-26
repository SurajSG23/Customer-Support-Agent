import React, { useState } from 'react';
import Chatbot from './Chatbot';
import './App.css';

interface FormData {
  topic: string;
  file: File | null;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    file: null
  });

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      topic: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert(`Topic: ${formData.topic}\nFile: ${formData.file?.name || 'No file selected'}`);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Document Analysis Tool</h1>
          <p>Upload your document and specify a topic for analysis</p>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="topic" className="form-label">
              Topic
            </label>
            <input
              id="topic"
              type="text"
              className="form-input"
              value={formData.topic}
              onChange={handleTopicChange}
              placeholder="Enter the topic you want to analyze"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="file" className="form-label">
              Document
            </label>
            <input
              id="file"
              type="file"
              className="form-input file-input"
              onChange={handleFileChange}
              accept=".txt,.pdf,.docx"
              required
            />
            <div className="file-info">
              {formData.file ? (
                <span className="file-selected">
                  📄 {formData.file.name}
                </span>
              ) : (
                <span className="file-placeholder">
                  Choose a file (.txt, .pdf, .docx)
                </span>
              )}
            </div>
          </div>

          <button type="submit" className="submit-button">
            Analyze Document
          </button>
        </form>
      </div>

      <Chatbot />
    </div>
  );
};

export default App;