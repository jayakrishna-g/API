const express = require('express')
const question=require('./question')

const app = express()
const bodyParser = require('body-parser')


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/Question',function(req,res){
    console.log(req.body)
    var questionJSON=question.getquestion()
    res.send(questionJSON)
})

app.get('/Question/:questionId',function(req,res){
    var quid = req.params.questionId;
    console.log(quid);
    var questionJSON=question.getquestion(quid)
    res.send(questionJSON)
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })