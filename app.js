const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middleWare = require('./middlewares');
const api = require('./src/api');

const app = express()

app.set('trust proxy', 1);
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Wow! proxy api is running now...'
    })
})

app.use('/api/v1/', api);
app.use(middleWare.notFound);
app.use(middleWare.errorHandler);

module.exports = app