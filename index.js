const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/ask', (req, res) => {
  const { question } = req.body;

  const response = {
    answer: "This is the answer to your question.",
    explanation: "Here’s a simple explanation to help you understand."
  };

  res.json(response);
});

app.get('/', (req, res) => {
  res.send('SmartStudy API is live!');
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
