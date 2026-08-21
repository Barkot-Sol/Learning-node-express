const express = require('express');
const app = express();

app.listen(3000);
app.get('/', (req, res) => {
    // res.send('<p>I will be a banana one day</p>');
    res.sendFile('./screen/index.html', { root:__dirname });
})
app.get('/about', (req, res) => {
    res.sendFile('./screen/about.html', { root:__dirname });
})
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.status(400).sendFile('./screen/error.html', { root:__dirname });
})