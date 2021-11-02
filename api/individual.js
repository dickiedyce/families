const express = require('express');
const { individual } = require('./utils/family');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const child = individual({ depth: 5 });
    res.json(child);
  } catch (error) {
    console.log(error);
    res.status(200).json({}); // 'notfound'
  }
});

module.exports = router;
