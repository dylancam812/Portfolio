import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './about.css';

function About() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [scaleMult, setScaleMult] = useState(1);

  const textareaRef = useRef(null);
  const chatFormRef = useRef(null);
  const chatLogRef = useRef(null);

  const maxRows = 5;
  const lineHeight = 24;

  const resizeTextArea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    const maxHeight = (maxRows * lineHeight * scaleMult) + 36 * scaleMult;
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden';

    if (el.scrollHeight > maxHeight) {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    }
  }, [scaleMult]);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width > 1800) setScaleMult(1.5);
      else if (width > 1500) setScaleMult(1.25);
      else setScaleMult(1);
    };

    updateScale();

    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateScale();
        resizeTextArea();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [resizeTextArea]);

  useEffect(() => {
    resizeTextArea();
  }, [scaleMult, resizeTextArea]);

  useEffect(() => {
    resizeTextArea();
  }, [input, resizeTextArea]);

  useEffect(() => {
    if (chatLogRef.current) {
      requestAnimationFrame(() => {
        chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
      });
    }
  }, [messages]);

  useEffect(() => {
    if (navigator.userAgent.includes('Windows')) {
      document.querySelector('#about')?.classList.add('windows');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (firstSubmit) {
      chatFormRef.current.classList.add('afterSubmit');
      setFirstSubmit(false);
    }

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    resizeTextArea();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="aboutContainer" id="about">
      <div className="chatContainer">
        <div className="chatLog" ref={chatLogRef}>
          {messages
            .filter((msg) => msg.role !== 'system')
            .map((msg, index) => (
              <div
                key={index}
                className={`chatMessage ${msg.role === 'user' ? 'outgoing' : 'incoming'}`}
              >
                {msg.content}
              </div>
            ))}
        </div>
        <form className="chatForm" onSubmit={handleSubmit} ref={chatFormRef}>
          <div className="promptContainer">
            <div className="textareaWrapper">
              <textarea
                autoFocus={window.innerWidth > 490}
                name="userMessage"
                className="promptInput"
                rows="1"
                placeholder="Ask about me"
                ref={textareaRef}
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className={`sendPromptButton ${input.trim() ? 'hasPrompt' : ''}`}
                disabled={loading}
              >
                {loading ? <div className="square" /> : <AiOutlineArrowUp />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;
