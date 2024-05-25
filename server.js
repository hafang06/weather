"use strict";

const PORT = 3000;
const express = require('express');
const app = express();

function logger(req, res, next){
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);
app.use(express.static("public"));

// app.get('/index.html', (req, res) =>{
//     res.json({ok : true});
// });

// app.get('/greet/:name', (req, res)=>{
//     res.json({greeting : `Hello ${req.params.name}`});
// });

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));