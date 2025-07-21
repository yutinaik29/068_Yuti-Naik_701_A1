const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// Serve all static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
