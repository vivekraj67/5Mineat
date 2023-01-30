const express = require("express");
const app = express();
const path = require("path");
// const fs = require("fs");
// var serveStatic = require('serve-static')
const port = 80;

// express related things
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/items', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/items.html'));
})
app.get('/cart', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/cart.html'));
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});