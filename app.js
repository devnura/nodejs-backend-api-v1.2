const express = require('express')
const mountRoutes = require('./app/routes')
const bodyParser = require("body-parser")
const cors = require("cors");
const logger = require("morgan")
const app = express()
const fs = require('fs')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}))

app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev'));

mountRoutes(app)

app.listen(5000, () => {
    console.log("Server run on port 5000");
  });

