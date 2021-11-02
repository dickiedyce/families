const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

/**
 * Check a directory exists relative to the document root, and create on if not
 * @param {string} directoryName Which directory are we checking for?
 */
function ensureDir(directoryName) {
  const dirPath = path.join(__dirname, directoryName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

ensureDir('public');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.get(app.use(express.static(path.join(__dirname, 'public'))));

const port = process.env.PORT || 80;
server = app.listen(port, () => console.log(`Server running on port {$port}`));
