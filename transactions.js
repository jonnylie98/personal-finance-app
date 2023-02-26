const express = require('express');
const request = require('request');

transactionsRouter = express.Router();

// Get all names
transactionsRouter.get('/', (req, res) => {
    request.get('https://api.up.com.au/api/v1/transactions', {
        'auth': {
            'bearer': process.env.UP_ACCESS_TOKEN
        }
    }).pipe(res);
});

module.exports = transactionsRouter;