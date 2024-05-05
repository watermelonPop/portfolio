
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
