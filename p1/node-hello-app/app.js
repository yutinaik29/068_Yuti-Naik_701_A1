const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API route: GET /gethello
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
