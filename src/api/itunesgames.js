const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://rss.itunes.apple.com/api/v1/us/ios-apps/new-games-we-love/all/25/explicit.json';

// router.get('/', (req, res, next) => {
//   console.log(`API is running`);
// }, 
// async(req, res, next) => {
//     try {
//       const {data} = await axios.get(BASE_URL);
//       console.log(`Data ${data}`);
//       return res.json(data);
//     } catch(err) {
//       return next(err);
//     } 
// });

router.get('/test', async(req, res, next) => {
       try {
        const {data} = await axios.get(BASE_URL);
        console.log(`Data ${data}`);
        return res.json(data);
      } catch(err) {
        return next(err);
      } 
});

// router.get('/', async(req, res, next) => {
//     try {
//         const {data} = await axios.get(BASE_URL);
//         console.log(`Data ${data}`);
//         return res.json(data);
//       } catch(err) {
//         return next(err);
//       } 
// })

module.exports = router;

