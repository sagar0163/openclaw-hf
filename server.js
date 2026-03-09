import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 7860;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Simple chat history (in-memory)
const chatHistory = [];

// API Routes
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  // Add to history
  chatHistory.push({
    role: 'user',
    content: message,
    timestamp: new Date().toISOString()
  });
  
  // Simulate response (in production, call actual OpenClaw)
  const responses = [
    "I understand your request. Let me help you with that.",
    "That's an interesting question! Here's what I think...",
    "I'll help you with that. Let me process this...",
    "Great! I've got some ideas for you.",
    "Thanks for asking! Here's my response..."
  ];
  
  const reply = responses[Math.floor(Math.random() * responses.length)];
  
  chatHistory.push({
    role: 'assistant',
    content: reply,
    timestamp: new Date().toISOString()
  });
  
  res.json({ reply, history: chatHistory.slice(-10) });
});

app.get('/api/history', (req, res) => {
  res.json(chatHistory.slice(-20));
});

app.post('/api/clear', (req, res) => {
  chatHistory.length = 0;
  res.json({ success: true });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🤖 OpenClaw Web UI running on port ${PORT}`);
});

export default app;
