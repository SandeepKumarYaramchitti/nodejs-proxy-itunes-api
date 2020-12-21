const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
      message: 'API is running fine'
  })
});

const itunesGames = require('./itunesgames')

router.use('/itunesgames', itunesGames);

module.exports = router