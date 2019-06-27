var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var router = require('./router')

app = express()
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/static/', express.static('./public'))
app.use(router)



app.listen(2000, function() {
    console.log("server is running at http://localhost:2000 ...")
})