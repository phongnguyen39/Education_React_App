const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.get('/', function (req, res){
    res.send('index')
})

app.use(cors());
app.use(bodyParser.json);
app.use(express.static(__dirname+'/public')); //

app.listen(port, function(){
    console.log("can you see me?")
    console.log("Express.js is running")
    console.log('Listening Port ' + port)
})

