const express = require('express');
const app = express ();
app.use(express.json());
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('login',{ data: { title: 'Login Page', message:'testing' } });
});

app.get('/events', (req, res) => {
    res.send('events page will be created here');
});

app.put('/events', (req, res) => {
    res.send('events page will be updated on this request');
});

app.get('/gallery', (req, res) => {
    res.send('gallery page will be created here');
});

app.get('/team', (req, res) => {
    res.send('team page will be created here');
});

app.get('/community', (req, res) => {
    res.send('community page will be created here');
});

app.get('/sponsors', (req, res) => {
    res.send('sponsors page will be created here');
});


app.listen(PORT, () => {
    console.log("Server Listening on PORT:",PORT);
});