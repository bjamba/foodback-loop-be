const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.API_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.API_PORT}`);
});