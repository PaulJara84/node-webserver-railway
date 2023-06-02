require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
//const port = 8080;
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middleWear
// Servir contenido estático
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Home page');
// })

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Paul Jara',
        titulo: 'Server Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Paul Jara',
        titulo: 'Server Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Paul Jara',
        titulo: 'Server Node'
    });
});

app.get('*', (req, res) => {
    //res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});