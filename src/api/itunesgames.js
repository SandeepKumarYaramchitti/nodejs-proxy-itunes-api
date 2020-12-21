const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 100,
 });
 
 const speedLimiter = slowDown({
   windowMs: 15 * 60 * 1000,
   delayAfter: 100,
   delayMs: 500
 });

const router = express.Router();

const BASE_URL = 'https://rss.itunes.apple.com/api/v1/us/ios-apps/new-games-we-love/all/25/explicit.json';
// const BASE_URL = 'https://itunes.apple.com/search?term=jim+jones&country=ca';

let cacheData;
let cacheTime;

router.get('/games', limiter, speedLimiter,  async(req, res, next) => {
    //Implement Authorization
   if (cacheTime && cacheTime > Date.now() - 60 * 1000) {
      console.log(`Returning cached data`);
      return res.json(cacheData)
   }
   try {
      const {data} = await axios.get(BASE_URL);
      cacheData = data;
      cacheTime = Date.now();
      data.cacheTime = cacheTime;
      return res.json(data);
   } catch(err) {
      return next(err);
   }     

});

module.exports = router;

