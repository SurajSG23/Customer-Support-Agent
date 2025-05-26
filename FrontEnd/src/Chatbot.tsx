import React, { useState } from 'react';
import "./Chatbot.scss"
// Chatbot Component
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [
        ...messages,
        { text: inputValue, isUser: true },
        { text: "Thank you for your question! This is a demo response.", isUser: false }
      ];
      setMessages(newMessages);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.37 14.97 3.03 16.23L2 22L7.77 20.97C9.03 21.63 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.7 20 9.46 19.68 8.36 19.09L8 18.9L4.91 19.91L5.92 16.82L5.72 16.46C5.03 15.36 4.71 14.12 4.71 12.86C4.71 7.58 8.58 3.71 13.86 3.71C16.43 3.71 18.83 4.69 20.56 6.42C22.29 8.15 23.27 10.55 23.27 13.12C23.27 18.4 19.4 22.27 14.12 22.27H12V20Z" fill="currentColor"/>
        </svg>
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button className="close-button" onClick={toggleChatbot}>×</button>
          </div>
          z
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Main App Component
const App: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: '',
    file: null as File | null
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
    alert(`Topic: ${formData.topic}\nFile: ${formData.file?.name || 'No file selected'}`);
  };

  return (
    <div className="app">

      <div className="container">
        <div className="header">
          <h1>Document Analysis Tool</h1>
          <p>Upload your document and specify a topic for analysis</p>
        </div>

        <div className="form" onSubmit={handleSubmit}>
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

          <button type="button" onClick={handleSubmit} className="submit-button">
            Analyze Document
          </button>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default App;