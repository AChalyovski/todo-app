const express = require('express');
const cors = require('cors');
// const bodyParser = require('bodyParser');
const api = require('./api');


const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.json({
        message: `Welcome App`,
    });
});

// app.use(bodyParser.json());
app.use('/api', api);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
});