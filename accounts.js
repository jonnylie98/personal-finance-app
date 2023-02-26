const express = require('express');
const request = require('request');

names = {1: 'John', 2: 'Jane', 3: 'Jack'};

accountsRouter = express.Router();

// Get all names
accountsRouter.get('/', (req, res) => {
    request.get('https://api.up.com.au/api/v1/accounts', {
        'auth': {
            'bearer': process.env.UP_ACCESS_TOKEN
        }
    }).pipe(res);
});

// Get a single name
accountsRouter.get('/:id', (req, res) => {
    res.json(names[req.params.id]);
    console.log(names[req.params.id])
});

// Update a single name
accountsRouter.put('/:id', (req, res, next) => {
    names[req.params.id] = req.body.name;
    res.json(names[req.params.id]);
    console.log(names);
});

// Add a new name
accountsRouter.post('/', (req, res) => {
    names[req.body.id] = req.body.name;
    res.json(names[req.body.id]);
    console.log(names);
});

// Delete a name
accountsRouter.delete('/:id', (req, res) => {
    delete names[req.params.id];
    res.json(names);
    console.log(names);
});

module.exports = accountsRouter;