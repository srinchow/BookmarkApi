const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const bodyParser = require('body-parser');
const response = require('./utils/response');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(response);

app.use('/',require('./routes'));

const port = process.env.PORT || 3000;

app.listen(port,err =>{
    console.log(err || ('Listening to port ' + port));
});

process
    .on('exit',code =>{
        process.exit(code);
    })
    .on('SIGINT',()=>{
        process.exit(0);
    })