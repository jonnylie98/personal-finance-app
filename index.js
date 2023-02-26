const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json())
dotenv.config();


const accountsRouter = require('./accounts.js');
const categoriesRouter = require('./categories.js')
const transactionsRouter = require('./transactions.js')
app.use('/accounts', accountsRouter);
app.use('/categories', categoriesRouter);
app.use('/transactions', transactionsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})