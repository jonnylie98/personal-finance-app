const express = require('express');
const request = require('request');

categoriesRouter = express.Router();

// Get all names
categoriesRouter.get('/', (req, res) => {
    request.get('https://api.up.com.au/api/v1/categories', {
        'auth': {
            'bearer': process.env.UP_ACCESS_TOKEN
        }
    }).pipe(res);
});

categoriesRouter.get('/:id', (req, res) => {
    request.get(`https://api.up.com.au/api/v1/categories/${req.params.id}`, {
        'auth': {
            'bearer': process.env.UP_ACCESS_TOKEN
        }
    }).pipe(res);
});


module.exports = categoriesRouter;