require('dotenv').config();
require('./config/db.config').connect();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
const PORT = process.env.API_PORT;

app.get('/', (req, res) => {
    res.send({message: 'Hello world!', status: 200});
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})