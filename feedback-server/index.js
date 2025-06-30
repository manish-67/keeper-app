const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let feedbacks = []; // temporary in-memory storage

// GET all feedback
app.get('/api/feedback', (req, res) => {
  res.json(feedbacks);
});

// POST new feedback
app.post('/api/feedback', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) return res.status(400).json({ error: 'Name and message required' });

  const newFeedback = { name, message, createdAt: new Date() };
  feedbacks.unshift(newFeedback);
  res.status(201).json({ success: true, feedback: newFeedback });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
